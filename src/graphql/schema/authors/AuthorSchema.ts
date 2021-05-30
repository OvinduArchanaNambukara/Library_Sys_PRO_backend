export const AuthorsSchema = `
    type Query {
        getAllAuthors: [Authors!]!
    }

    type Mutation {
        addAuthor(name: String!): Authors!
        deleteAuthor(id: String!): Authors
        updateAuthor(updateName: String!, id: String!): Authors
    }

    type Authors {
        _id: String!
        name: String!
    }
`;
