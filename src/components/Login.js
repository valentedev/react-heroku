const Login = ({ usuario, setUsuario, logado, setLogado, token, setToken }) => {
  const { email, senha } = usuario;

  const fetchUsuario = async () => {
    const res = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: usuario.email,
        senha: usuario.senha,
      }),
    });
    const data = await res.json();
    window.localStorage.setItem("session-token", data.Token);
    setUsuario({
      ...usuario,
      nome: data.Nome,
      sobrenome: data.Sobrenome,
      senha: "",
    });
    setLogado(logado === false);
  };

  const onSubmit = e => {
    e.preventDefault();
    fetchUsuario();
  };

  const onChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setUsuario({ ...usuario, [name]: value });
  };

  return (
    <>
      <h4 className="logon-items">Login</h4>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="e-mail"
          onChange={onChange}
          name="email"
          value={email}
        />
        <input
          type="password"
          placeholder="senha"
          onChange={onChange}
          name="senha"
          value={senha}
        ></input>
        <button type="submit" className="logon-items">
          OK
        </button>
      </form>
    </>
  );
};

export default Login;
