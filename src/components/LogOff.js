import { useContext } from "react";
import AuthContext from "../context/context";
import Alerta from "./Alerta";
import Login from "./Login";

const LogOff = props => {
  const authContext = useContext(AuthContext);
  const { cadastrarTrue, alerta } = authContext;

  return (
    <div className="container">
      {alerta && <Alerta />}
      <Login />
      <button className="logon-items" onClick={cadastrarTrue}>
        Cadastrar
      </button>
      <button className="logon-items">Pedir nova senha</button>
    </div>
  );
};

export default LogOff;
