import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import { BY_COUNTRY_CODE } from "./queries/by-country-code";

describe("App", () => {
  test("Snapshot", () => {
    const { asFragment } = render(
      <MockedProvider addTypename={false}>
        <App />
      </MockedProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("Structure", () => {
    render(
      <MockedProvider addTypename={false}>
        <App />
      </MockedProvider>
    );

    expect(screen.getByText("Example input: EE")).toBeInTheDocument();
    expect(screen.getByText("No data")).toBeInTheDocument();
  });

  test("Request: success", async () => {
    const mocks = [
      {
        request: {
          query: BY_COUNTRY_CODE,
          variables: {
            code: "EE",
          },
        },
        result: {
          data: {
            country: { code: "EE", name: "Estonia" },
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    const input = screen.getByRole<HTMLInputElement>("textbox");

    fireEvent.change(input, { target: { value: "EE" } });

    expect(await screen.findByText("Estonia")).toBeInTheDocument();
  });

  test("Request: fail", async () => {
    const mocks = [
      {
        request: {
          query: BY_COUNTRY_CODE,
          variables: {
            code: "EE",
          },
        },
        error: new Error("An error occurred"),
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    const input = screen.getByRole<HTMLInputElement>("textbox");

    fireEvent.change(input, { target: { value: "EE" } });

    expect(
      await screen.findByText("Error: An error occurred")
    ).toBeInTheDocument();
  });
});
