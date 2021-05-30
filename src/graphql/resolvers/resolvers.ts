import merge from "lodash.merge";
import authorResolvers from "./Authors";
import bookResolver from "./Books";

export const resolvers = merge(authorResolvers, bookResolver);

