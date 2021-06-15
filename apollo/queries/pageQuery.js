import gql from 'graphql-tag'
export const pageQuery = gql`
  query MyQuery {
    page(id: "/", idType: URI) {
      title
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }




`
