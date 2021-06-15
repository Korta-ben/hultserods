import gql from 'graphql-tag'

// import { PAGE_SETTINTS } from '~/apollo/queries/fragments/blocksQuery'
export const contentQuery = gql`
  query MyQuery {
    page(idType: URI, id: "/") {
      ...contentFields
      ...pageSettingsFields



    }
  }
  fragment contentFields on Page{
    title
    uri
    content
  }



  fragment pageSettingsFields on Page{
    pageSettings {
      fieldGroupName
      blocks{
        blockType
        fieldGroupName
        position
        content {
          ... on Page_Pagesettings_blocks_Content_Text {
            ...pageSettingContentField
            text
            typeof
          }
          ... on Page_Pagesettings_blocks_Content_TextArea {
            ...pageSettingContentField
            textarea
            typeof
          }
          ... on Page_Pagesettings_blocks_Content_Image {
            ...pageSettingContentField

            image {
              mediaItemUrl
            }
          }
          ... on Page_Pagesettings_blocks_Content_Posts {
            ...pageSettingContentField

            posts {
              ... on Page {
                ...contentFields
              }
            }
          }
        }
      }
    }

  }
  fragment pageSettingContentField on PageSettings{
    fieldGroupName
  }


`

