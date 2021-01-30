const LogOn = ({
  usuario,
  setUsuario,
  logado,
  setLogado,
  mudarSenha,
  setMudarSenha,
}) => {
  const logadoFalse = () => {
    setLogado(logado === false);
    setUsuario({ ...usuario, nome: "", sobrenome: "", email: "", senha: "" });
    window.localStorage.removeItem("session-token");
  };

  const alterarSenha = () => {
    setMudarSenha(mudarSenha === false);
  };

  return (
    <>
      <div className="container">
        <h4 className="logon-items">Olá {usuario.nome}!</h4>
        <button onClick={logadoFalse} className="logon-items">
          logout
        </button>
        <button className="logon-items" onClick={alterarSenha}>
          alterar senha
        </button>
      </div>
    </>
  );
};

export default LogOn;
