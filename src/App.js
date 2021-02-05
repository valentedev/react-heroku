import "./App.css";
import Layout from "./components/Layout";

//Contexto
import AuthState from "./context/state";

const App = () => {
  return (
    <AuthState>
      <Layout />
    </AuthState>
  );
};

export default App;
