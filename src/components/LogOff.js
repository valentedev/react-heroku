import Login from "./Login";

const LogOff = ({
  usuario,
  logado,
  setLogado,
  setUsuario,
  registrar,
  setRegistrar,
}) => {
  const Cadastrar = () => {
    setRegistrar(registrar === false);
  };
  return (
    <div className="container">
      <Login
        usuario={usuario}
        logado={logado}
        setLogado={setLogado}
        setUsuario={setUsuario}
        registrar={registrar}
        setRegistrar={setRegistrar}
      />
      <button className="logon-items" onClick={Cadastrar}>
        Cadastrar
      </button>
    </div>
  );
};

export default LogOff;
