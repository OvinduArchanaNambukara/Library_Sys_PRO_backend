import {AuthorsSchema} from "./authors/AuthorSchema";
import {BookSchema} from "./books/BookSchema";
import {mergeTypeDefs} from '@graphql-tools/merge';

export const typeDefs = mergeTypeDefs([AuthorsSchema, BookSchema])

