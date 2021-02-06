import { useContext, useState } from "react";
import AuthContext from "../context/context";

const MudarSenha = props => {
  const authContext = useContext(AuthContext);
  const { mudarSenha, mudarSenhaFalse } = authContext;
  const [verSenha, setVerSenha] = useState(true);
  const [usuario, setUsuario] = useState({ senha: "", confirmaSenha: "" });
  const { senha, confirmaSenha } = usuario;

  const onSubmit = e => {
    e.preventDefault();
    mudarSenha({ senha });
    mudarSenhaFalse();
  };
  const onChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setUsuario({ ...usuario, [name]: value });
  };

  const Cancelar = () => {
    mudarSenhaFalse();
  };

  const toggleVerSenha = () => {
    setVerSenha(verSenha => !verSenha);
  };

  return (
    <>
      <h4 className="logon-items">Alterar senha</h4>
      {verSenha ? (
        <button onClick={toggleVerSenha}>
          <i className="fas fa-eye"></i>
        </button>
      ) : (
        <button onClick={toggleVerSenha}>
          <i className="fas fa-eye-slash"></i>
        </button>
      )}
      <form onSubmit={onSubmit}>
        {verSenha ? (
          <input
            type="password"
            placeholder="Nova senha"
            onChange={onChange}
            name="senha"
            value={senha}
          ></input>
        ) : (
          <input
            type="text"
            placeholder="Nova senha"
            onChange={onChange}
            name="senha"
            value={senha}
          />
        )}

        {verSenha ? (
          <input
            type="password"
            placeholder="Confirma senha"
            onChange={onChange}
            name="confirmaSenha"
            value={confirmaSenha}
          />
        ) : (
          <input
            type="text"
            placeholder="Confirma senha"
            onChange={onChange}
            name="confirmaSenha"
            value={confirmaSenha}
          />
        )}

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

export default MudarSenha;
