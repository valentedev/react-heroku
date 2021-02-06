import { useContext } from "react";
import AuthContext from "../context/context";
import Login from "./Login";

const LogOff = props => {
  const authContext = useContext(AuthContext);
  const { cadastrarTrue } = authContext;

  return (
    <div className="container">
      <Login />
      <button className="logon-items" onClick={cadastrarTrue}>
        Cadastrar
      </button>
    </div>
  );
};

export default LogOff;
