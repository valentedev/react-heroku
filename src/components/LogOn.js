import { useContext } from "react";
import AuthContext from "../context/context";
//import NomeToken from "../utils/TokenNome";
import Alerta from "./Alerta";

const LogOn = props => {
  const authContext = useContext(AuthContext);
  const { logout, mudarSenhaTrue, alerta } = authContext;

  var token = window.localStorage.getItem("session-token");
  var parsedToken = "Desconhecido";
  if (token !== null) {
    parsedToken = JSON.parse(atob(token.split(".")[1])).Nome;
  }

  return (
    <>
      <div className="container">
        {alerta && <Alerta />}
        <h4 className="logon-items">Olá {parsedToken}!</h4>
        <button
          onClick={() => {
            logout();
          }}
          className="logon-items"
        >
          logout
        </button>
        <button
          className="logon-items"
          onClick={() => {
            mudarSenhaTrue();
          }}
        >
          alterar senha
        </button>
      </div>
    </>
  );
};

export default LogOn;
