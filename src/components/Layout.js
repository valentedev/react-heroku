import { useContext } from "react";
import AuthContext from "../context/context";
import LogOn from "./LogOn";
import MudarSenha from "./MudarSenha";
import Cadastrar from "./Cadastrar";
import LogOff from "./LogOff";

const Layout = () => {
  const authContext = useContext(AuthContext);
  const { mudarSenhaState, cadastrarState, logout } = authContext;
  return (
    <div className="App container">
      {(() => {
        const token = localStorage.getItem("session-token");
        if (token) {
          const parsedToken = JSON.parse(atob(token.split(".")[1])).exp;
          const tokenTime = new Date(parsedToken * 1000);
          const now = new Date().getTime();
          if (tokenTime > now) {
            if (!mudarSenhaState) {
              return <LogOn />;
            } else {
              return <MudarSenha />;
            }
          } else {
            logout();
          }
        } else {
          if (!cadastrarState) {
            return <LogOff />;
          } else {
            return <Cadastrar />;
          }
        }
      })()}
    </div>
  );
};

export default Layout;
