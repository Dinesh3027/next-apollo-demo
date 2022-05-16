 // queries/getAllCharacters.js

 import { gql } from '@apollo/client'

 export default gql`
 query AllUsers{
    users(id: 20) {
      name
      email
      phone
      address
    }
  }`