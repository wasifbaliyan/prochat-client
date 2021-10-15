import Layout from "./components/Layout/Layout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./pages/Login/Login";

function App() {
  const [user] = useAuthState(auth);

  return !user ? <Login /> : <Layout />;
}

export default App;
