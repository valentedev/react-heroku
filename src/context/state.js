import { useReducer } from "react";
import Reducer from "./reducer";
import AuthContext from "./context";

import {
  LOGOUT_OK,
  LOGIN_OK,
  CADASTRAR_OK,
  MUDAR_SENHA_OK,
  LOGIN_FAIL,
} from "../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("session-token"),
    autenticado: false,
    usuario: { nome: "", email: "", senha: "" },
    cadastrarState: false,
    mudarSenhaState: false,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // login
  const login = async dadosForm => {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dadosForm,
      }),
    };

    try {
      const res = await fetch("http://localhost:8080/api/login", config);
      dispatch({
        type: LOGIN_OK,
        payload: res.json(),
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err,
      });
    }
  };

  // logout
  const logout = () =>
    dispatch({
      type: LOGOUT_OK,
    });

  // mudarSenha
  const mudarSenha = () => dispatch({ type: MUDAR_SENHA_OK });

  // cadastrar
  const cadastrar = () => dispatch({ type: CADASTRAR_OK });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        cadastrarState: state.cadastrarState,
        mudarSenhaState: state.mudarSenhaState,
        logout,
        login,
        cadastrar,
        mudarSenha,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
