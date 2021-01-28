const LogOn = ({ usuario, logado, setLogado, mudarSenha, setMudarSenha }) => {
  const logadoFalse = () => {
    setLogado(logado === false);
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
