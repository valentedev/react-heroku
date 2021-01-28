import { useEffect } from "react";

const Login = ({ usuario, setUsuario }) => {
  useEffect(() => {
    const buscaUsuario = async () => {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "rp@email.com",
          senha: "senha",
        }),
      });
      const data = await res.json();
      window.localStorage.setItem("session-token", data);
    };

    buscaUsuario();
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    console.log("submitted");
    //setUsuario(usuario === { nome: "", email: "" });
  };

  const { email, senha } = usuario;

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
