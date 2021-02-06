import { useContext, useState } from "react";
import AuthContext from "../context/context";

const Cadastrar = props => {
  const authContext = useContext(AuthContext);
  const { cadastrar, cadastrarFalse } = authContext;
  const [usuario, setUsuario] = useState({
    senha: "",
    confirmaSenha: "",
    nome: "",
    sobrenome: "",
    email: "",
  });
  const { senha, confirmaSenha, nome, sobrenome, email } = usuario;

  const onSubmit = e => {
    e.preventDefault();
    cadastrar({ senha, nome, sobrenome, email });
    cadastrarFalse();
  };
  const onChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setUsuario({ ...usuario, [name]: value });
  };
  const Cancelar = () => {
    cadastrarFalse();
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
        {senha === confirmaSenha && senha !== "" && confirmaSenha !== "" ? (
          <button type="submit" className="logon-items">
            OK
          </button>
        ) : (
          <button type="submit" className="logon-items" disabled>
            OK
          </button>
        )}
      </form>
      <button type="submit" className="logon-items" onClick={Cancelar}>
        Cancelar
      </button>
    </>
  );
};

export default Cadastrar;
