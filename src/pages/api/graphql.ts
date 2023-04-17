import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  
   type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    hello: String
    users: [User]
  }
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
#   clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
#   type Query {
#     books: [Book]
#   }
`
const user = [
  {
    id: 1,
    name: 'John Doe',
    email: 'test1@example.com',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'test2@example.com',
  },
  {
    id: 3,
    name: 'John Doe',
    email: 'test3@example.com',
  },
]
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    users: () => user,
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })
const serverStart = async () => {
  const { url } = await startStandaloneServer(apolloServer)
  console.log(url)
}
serverStart()
