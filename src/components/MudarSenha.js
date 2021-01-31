import { useState } from "react";

const MudarSenha = ({ usuario, setUsuario, mudarSenha, setMudarSenha }) => {
  const [verSenha, setVerSenha] = useState(true);
  const { senha, confirmaSenha } = usuario;
  const fetchMudaSenha = async () => {
    const res = await fetch("http://localhost:8080/api/mudarsenha", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("session-token"),
        email: usuario.email,
        senha: usuario.senha,
      }),
    });
    const data = await res.json();
    setMudarSenha(mudarSenha === false);
    console.log(data);
  };
  const onSubmit = e => {
    e.preventDefault();
    fetchMudaSenha();
    setUsuario({
      ...usuario,
      senha: "",
      confirmaSenha: "",
    });
    setMudarSenha(mudarSenha === false);
  };
  const onChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setUsuario({ ...usuario, [name]: value });
  };

  const Cancelar = () => {
    setMudarSenha(mudarSenha === false);
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
