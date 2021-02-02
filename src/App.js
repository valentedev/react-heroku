import { useState } from "react";
import "./App.css";
import LogOff from "./components/LogOff";
import LogOn from "./components/LogOn";
import MudarSenha from "./components/MudarSenha";
import Registrar from "./components/Registrar";
//import Login from "./components/Login";
import tokenOK from "./components/TokenOK";

function App() {
  const [logado, setLogado] = useState(false);
  const [mudarSenha, setMudarSenha] = useState(false);
  const [registrar, setRegistrar] = useState(false);
  //const [token, setToken] = useState(false);
  const [usuario, setUsuario] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    confirmaSenha: "",
  });

  // const tokenOK = () => {
  //   if (window.localStorage.getItem("session-token") === null) {
  //     setToken(null);
  //   }
  // };

  return (
    <div className="App container">
      {(() => {
        if (logado && !mudarSenha) {
          if (!tokenOK) {
            console.log("Olá");
            //setLogado(logado === true);
          }
          return (
            <>
              <LogOn
                usuario={usuario}
                setUsuario={setUsuario}
                logado={logado}
                setLogado={setLogado}
                mudarSenha={mudarSenha}
                setMudarSenha={setMudarSenha}
              />
            </>
          );
        } else if (logado && mudarSenha) {
          return (
            <MudarSenha
              mudarSenha={mudarSenha}
              setMudarSenha={setMudarSenha}
              usuario={usuario}
              setUsuario={setUsuario}
            />
          );
        } else if (!logado && registrar) {
          return (
            <Registrar
              registrar={registrar}
              setRegistrar={setRegistrar}
              usuario={usuario}
              setUsuario={setUsuario}
            />
          );
        } else {
          return (
            <LogOff
              usuario={usuario}
              logado={logado}
              setLogado={setLogado}
              setUsuario={setUsuario}
              registrar={registrar}
              setRegistrar={setRegistrar}
            />
          );
        }
      })()}

      {/* {(() => )()} */}
    </div>
  );
}

export default App;
