const Registrar = ({ registrar, setRegistrar, usuario, setUsuario }) => {
  const { nome, sobrenome, email, senha, confirmaSenha } = usuario;
  const onSubmit = e => {
    e.preventDefault();
    console.log("submitted");
    //setUsuario(usuario === { nome: "", email: "" });
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
        <button type="submit" className="logon-items" onClick={Cancelar}>
          Cancelar
        </button>
      </form>
    </>
  );
};

export default Registrar;
