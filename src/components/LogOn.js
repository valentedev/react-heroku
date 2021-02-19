import { useContext } from "react";
import AuthContext from "../context/context";
import NomeToken from "../utils/TokenNome";
import Alerta from "./Alerta";

const LogOn = props => {
  const authContext = useContext(AuthContext);
  const { logout, mudarSenhaTrue, alerta } = authContext;

  return (
    <>
      <div className="container">
        {alerta && <Alerta />}
        <h4 className="logon-items">Olá {NomeToken}!</h4>
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
