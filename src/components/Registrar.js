const Registrar = ({ registrar, setRegistrar, usuario, setUsuario }) => {
  const { nome, sobrenome, email, senha, confirmaSenha } = usuario;
  const fetchRegistrar = async () => {
    const res = await fetch("http://localhost:8080/api/cadastro", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: usuario.nome,
        sobrenome: usuario.sobrenome,
        email: usuario.email,
        senha: usuario.senha,
      }),
    });
    const data = await res.json();
    // setMudarSenha(mudarSenha === false);
    console.log(data);
  };
  const onSubmit = e => {
    e.preventDefault();
    fetchRegistrar();
    setRegistrar(registrar === false);
  };
  const onChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setUsuario({ ...usuario, [name]: value });
  };
  const Cancelar = () => {
    setRegistrar(registrar === false);
  };

  return (
    <>
      <h4 className="logon-items">Cadastro</h4>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Nome"
          onChange={onChange}
          name="nome"
          value={nome}
        />
        <input
          type="text"
          placeholder="Sobrenome"
          onChange={onChange}
          name="sobrenome"
          value={sobrenome}
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={onChange}
          name="email"
          value={email}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={onChange}
          name="senha"
          value={senha}
        />
        <input
          type="password"
          placeholder="Confirma senha"
          onChange={onChange}
          name="confirmaSenha"
          value={confirmaSenha}
        />
        <button type="submit" className="logon-items">
          OK
        </button>
      </form>
      <button type="submit" className="logon-items" onClick={Cancelar}>
        Cancelar
      </button>
    </>
  );
};

export default Registrar;
