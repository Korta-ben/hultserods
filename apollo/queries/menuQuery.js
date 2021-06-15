import gql from 'graphql-tag'
export const menuQuery = gql`
  query MyQuery {
    menuItems {
      nodes {
        label
        databaseId
        path
      }
    }
  }


`
