import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || ""
);

export default graphcms;
