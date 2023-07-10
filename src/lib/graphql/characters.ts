import { gql } from "apollo-server-micro";

export const GetCharacters = gql`
  query Characters($page: Int){
  characters(page: $page) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      status
      species
      image
      type
      location {
        name
        type
      }

    }
  }

}
`
