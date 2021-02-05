import { useContext } from "react";
import AuthContext from "../context/context";

const LogOn = props => {
  const authContext = useContext(AuthContext);
  const { logout, mudarSenha, usuario } = authContext;

  return (
    <>
      <div className="container">
        <h4 className="logon-items">Olá {usuario.nome}!</h4>
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
            mudarSenha();
          }}
        >
          alterar senha
        </button>
      </div>
    </>
  );
};

export default LogOn;
