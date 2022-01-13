import "./App.css";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Login from "./pages/Login";
import { setContext } from "@apollo/client/link/context";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import PetDetail from "./pages/PetDetail";
import PostDetail from "./pages/PostDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

const httpLink = createHttpLink({
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
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/post/:id" element={<PostDetail />} />
          <Route exact path="/profile/:username?" element={<Profile />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
