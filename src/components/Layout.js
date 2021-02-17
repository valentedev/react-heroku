import { useContext } from "react";
import AuthContext from "../context/context";
import LogOn from "./LogOn";
import MudarSenha from "./MudarSenha";
import Cadastrar from "./Cadastrar";
import LogOff from "./LogOff";
//import tokenOK from "./TokenOK";

const Layout = () => {
  const authContext = useContext(AuthContext);
  const { autenticado, mudarSenhaState, cadastrarState } = authContext;

  return (
    <div className="App container">
      {(() => {
        if (autenticado && !mudarSenhaState) {
          return <LogOn />;
        } else if (autenticado && mudarSenhaState) {
          return <MudarSenha />;
        } else if (!autenticado && cadastrarState) {
          return <Cadastrar />;
        } else {
          return <LogOff />;
        }
      })()}
    </div>
  );
};

export default Layout;
