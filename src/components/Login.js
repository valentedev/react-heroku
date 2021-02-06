import { useContext, useState } from "react";
import AuthContext from "../context/context";

const Login = props => {
  const authContext = useContext(AuthContext);
  const { login } = authContext;
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });
  const { email, senha } = usuario;

  const onSubmit = e => {
    e.preventDefault();
    login({ email, senha });
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
