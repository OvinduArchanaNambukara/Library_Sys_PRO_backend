import {IResolvers} from "graphql-tools";
import {addBook, deleteBook, getAllBooks, updateBook} from "../../database/books";


const bookResolver: IResolvers = {
    Query: {
        getAllBooks: async () => getAllBooks(),
    },

    Mutation: {
        addBook: async (root: any, args: { name: string, isbn: string, author: string }) => {
            const book = await addBook({
                book_name: args.name,
                book_isbn: args.isbn,
                author: args.author
            });
            return book;
        },
        deleteBook: async (root: any, args: { id: string }) => {
            await deleteBook(args.id);
        },
        updateBook: async (root: any, args: { updateName: string, id: string, updateISBN: string, updateAuthor: string }) => {
            await updateBook(args.id, args.updateName, args.updateAuthor, args.updateISBN);
        }
    },
};

export default bookResolver;


