import { ApolloServer } from "apollo-server";
import { readFileSync } from "fs";
import { resolve } from "path";
import { cepResolver } from "./resolvers/cep";

const cepSchema = readFileSync(resolve(__dirname, "schemas/cep.graphql"), {
  encoding: "utf-8",
});

const typeDefs = [cepSchema];
const resolvers = [cepResolver];

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server running on port: ${url}`);
});
