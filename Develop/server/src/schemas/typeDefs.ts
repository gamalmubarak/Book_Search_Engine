const typeDefs = `
type Book {
  _id: ID
  bookId: String!
  title: String!
  authors: [String]!
  description: String
  image: String
  link: String
}

type User {
  _id: ID
  username: String!
  email: String!
  savedBooks: [Book]
  bookCount: Int
}

input UserInput {
  username: String
  email: String
  password: String
}

type Auth {
  token: ID!
  user: User
}

input BookInput {
  bookId: String!
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}

type Query {
  me: User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(input: UserInput!): Auth
  saveBook(bookData: BookInput!): User
  removeBook(bookId: String!): User
}
`;

export default typeDefs;