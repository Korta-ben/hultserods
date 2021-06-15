import gql from 'graphql-tag'
export const blocksQuery = gql`
  query MyQuery {
    page(idType: URI, id: "/") {
      pageSettings {
        fieldGroupName
        blocks {
          blockType
          fieldGroupName
          position
          content {
            ... on Page_Pagesettings_blocks_Content_Text {
              text
              fieldGroupName
              type
            }
            ... on Page_Pagesettings_blocks_Content_TextArea {
              fieldGroupName
              textarea
              type
            }
            ... on Page_Pagesettings_blocks_Content_Image {
              fieldGroupName
              image {
                mediaItemUrl
              }
            }
            ... on Page_Pagesettings_blocks_Content_Posts {
              fieldGroupName
              posts {
                ... on Page {
                  title
                  uri
                  content
                }
              }
            }
          }
        }
      }
    }
  }

`
