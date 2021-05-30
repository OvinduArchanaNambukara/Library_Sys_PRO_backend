import {makeExecutableSchema} from "graphql-tools";
import {GraphQLSchema} from "graphql";
import {typeDefs} from "./schema/typeDefs";
import {resolvers} from "./resolvers/resolvers";

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});

export default schema;
