import Layout from "./components/Layout/Layout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./pages/Login/Login";
import { Switch, Route } from "react-router";
import Home from "./pages/Home/Home";
import ChatDetails from "./pages/ChatDetails/ChatDetails";

function App() {
  const [user] = useAuthState(auth);

  return user ? (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path="/chats/:id" exact>
        <Layout>
          <ChatDetails />
        </Layout>
      </Route>
    </Switch>
  ) : (
    <Login />
  );
}

export default App;
