import "./App.css";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  creteHttpLink,
} from "@apollo/client";

const httpLInk = createHttpLink({
  uri: "graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div></div>;
    </ApolloProvider>
  );
}

export default App;
