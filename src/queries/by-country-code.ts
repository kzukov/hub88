import { gql } from "@apollo/client";

export interface ByCountryCode {
  country: {
    code: string;
    name: string;
  };
}

export interface CountryVariables {
  code: string;
}

export const BY_COUNTRY_CODE = gql`
  query ByCountryCode($code: ID!) {
    country(code: $code) {
      name
      code
    }
  }
`;
