import {IResolvers} from "graphql-tools";
import {addAuthor, getAllAuthors, deleteAuthor, updateAuthor} from "../../database/authors";

const authorResolvers: IResolvers = {
    Query: {
        getAllAuthors: getAllAuthors,
    },

    Mutation: {
        addAuthor: async (root: any, args: { name: string }) => {
            const author = await addAuthor({name: args.name});
            return author;
        },
        deleteAuthor: async (root: any, args: { id: string }) => {
            const removedAuthor = await deleteAuthor(args.id);
        },
        updateAuthor: async (root: any, args: { updateName: string, id: string }) => {
            await updateAuthor(args.id, args.updateName);
        }
    },
};

export default authorResolvers;


