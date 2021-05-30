export const BookSchema = `
    type Query {
        getAllBooks: [Books!]!
    }

    type Mutation {
        addBook(name: String!, isbn: String, author: String): Books!
        deleteBook(id: String!): Books
        updateBook(updateName: String!, id: String!,updateAuthor: String!, updateISBN: String!): Books
    }

    type Books {
        _id: String!
        book_name: String!
        author: String!
        book_isbn: String!
    }
`;


