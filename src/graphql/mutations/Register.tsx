import { gql } from "@apollo/client"

export const REGISTER_USER = gql`
 mutation REGISTERUSER(
  $email: String!
  $hashedPassword: String!
  $confirmPassword: String!
  $username: String!
) {
  register(
    registerInput: {
      email: $email
      hashedPassword:$hashedPassword
      confirmPassword: $confirmPassword
      username: $username
    }
  ) {
    user {
      avatarUrl
      email
      id
      password
    }
  }
}

`