import { useContext } from "react";
import AuthContext from "../context/context";
import LogOn from "./LogOn";
import MudarSenha from "./MudarSenha";
import Registrar from "./Registrar";
import LogOff from "./LogOff";

const Layout = () => {
  const authContext = useContext(AuthContext);
  const { autenticado, mudarSenhaState, cadastrado } = authContext;
  return (
    <div className="App container">
      {(() => {
        if (autenticado && !mudarSenhaState) {
          return (
            <>
              <LogOn />
            </>
          );
        } else if (autenticado && mudarSenhaState) {
          return <MudarSenha />;
        } else if (!autenticado && cadastrado) {
          return <Registrar />;
        } else {
          return <LogOff />;
        }
      })()}
    </div>
  );
};

export default Layout;
