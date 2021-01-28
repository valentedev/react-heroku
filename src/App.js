import { useState } from "react";
import "./App.css";
import LogOff from "./components/LogOff";
import LogOn from "./components/LogOn";
import MudarSenha from "./components/MudarSenha";
import Registrar from "./components/Registrar";

function App() {
  const [logado, setLogado] = useState(false);
  const [mudarSenha, setMudarSenha] = useState(false);
  const [registrar, setRegistrar] = useState(false);
  const [usuario, setUsuario] = useState({
    nome: "Rodrigo",
    sobrenome: "",
    email: "",
    senha: "",
    confirmaSenha: "",
  });

  return (
    <div className="App container">
      {(() => {
        if (logado && !mudarSenha) {
          return (
            <LogOn
              usuario={usuario}
              setUsuario={setUsuario}
              logado={logado}
              setLogado={setLogado}
              registrar={registrar}
              setRegistrar={setRegistrar}
              mudarSenha={mudarSenha}
              setMudarSenha={setMudarSenha}
            />
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
    </div>
  );
}

export default App;
