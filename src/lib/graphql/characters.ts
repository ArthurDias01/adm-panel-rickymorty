import { gql } from "apollo-server-micro";

export const GetCharacters = gql`
  query Characters($page: Int, $name: String){
  characters(page: $page, filter: { name: $name }) {
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
