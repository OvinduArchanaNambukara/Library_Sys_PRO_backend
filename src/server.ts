import express from "express";
import {ApolloServer} from "apollo-server-express";
import schema from "./graphql/schema";
import * as dotenv from "dotenv";
import {connectDatabase} from "./database";

dotenv.config();

const app = express();

connectDatabase();

const server = new ApolloServer({
    schema,
    playground: true,

});


server.applyMiddleware({app, path: "/graphql"});

app.listen({port: process.env.PORT}, () => {
    console.log(`Apollo Server on http://localhost:${process.env.PORT}/graphql`);
});



