import React from "react";

const MudarSenha = ({ usuario, setUsuario, mudarSenha, setMudarSenha }) => {
  const { senha, confirmaSenha } = usuario;
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
    setMudarSenha(mudarSenha === false);
  };

  return (
    <>
      <h4 className="logon-items">Alterar senha</h4>
      <form onSubmit={onSubmit}>
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
        ></input>
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

export default MudarSenha;
