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
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import AddPost from "./pages/AddPost";
import Jumbotron from "./components/Jumbotron";

const httpLink = createHttpLink({
  uri: "/graphql",
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
        <Header />
        <Jumbotron />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/profile/" element={<Profile />}>
            <Route path=":username" element={<Profile />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
