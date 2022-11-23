import React from "react";
import ReactDOM from "react-dom/client";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
