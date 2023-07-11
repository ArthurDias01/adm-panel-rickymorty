import { gql } from "apollo-server-micro";

export const GetCharacters = gql`
  query Characters($page: Int,$name: String, $status: String) {
  characters(page: $page, filter: {name: $name, status: $status}) {
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
export const GetCharacter = gql`
query Character($id: ID!){
  character(id: $id) {
    id
    name
    status
    species
    type
    origin {
      name
      dimension
    }
    location {
      name
      dimension
    }
    image
  }
}`;
