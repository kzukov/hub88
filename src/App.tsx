import { useQuery } from "@apollo/client";
import { useState } from "react";
import Alert from "./components/alert/alert";
import Container from "./components/container/container";
import Input from "./components/input/input";
import Row from "./components/row/row";
import Table, { TableColumn } from "./components/table/table";
import TopSpacing from "./components/top-spacing/top-spacing";
import {
  BY_COUNTRY_CODE,
  ByCountryCode,
  CountryVariables,
} from "./queries/by-country-code";

function App() {
  const [countryCode, setCountryCode] = useState("");

  const { data, loading, error } = useQuery<ByCountryCode, CountryVariables>(
    BY_COUNTRY_CODE,
    { variables: { code: countryCode } }
  );

  const columns: TableColumn[] = [
    {
      key: "name",
      content: "Country name",
    },
    {
      key: "code",
      content: "Country code",
    },
  ];

  return (
    <Container>
      <Row>
        <TopSpacing>
          <Alert type="warning">Example input: EE</Alert>
          <TopSpacing>
            <Input
              placeholder="Filter by country code"
              onChange={(value) => {
                setCountryCode(value);
              }}
            />
          </TopSpacing>
          <hr />
          {error && (
            <TopSpacing>
              <Alert type="danger">{error.toString()}</Alert>
            </TopSpacing>
          )}
          {data?.country && (
            <TopSpacing>
              <Table columns={columns} data={[data.country]} />
            </TopSpacing>
          )}
          {!data?.country && (
            <TopSpacing>
              <Alert type="dark">No data</Alert>
            </TopSpacing>
          )}
          {loading && (
            <TopSpacing>
              <Alert type="primary">Data is loading</Alert>
            </TopSpacing>
          )}
        </TopSpacing>
      </Row>
    </Container>
  );
}

export default App;
