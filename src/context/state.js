import { useReducer } from "react";
import Reducer from "./reducer";
import AuthContext from "./context";

import {
  LOGOUT_OK,
  LOGIN_OK,
  LOGIN_FAIL,
  CADASTRAR_OK,
  CADASTRAR_FAIL,
  CADASTRAR_TRUE,
  CADASTRAR_FALSE,
  MUDAR_SENHA_OK,
  MUDAR_SENHA_FAIL,
  MUDAR_SENHA_TRUE,
  MUDAR_SENHA_FALSE,
} from "../types";

const AuthState = props => {
  const initialState = {
    autenticado: false,
    usuario: null,
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
      body: JSON.stringify(dadosForm),
    };

    try {
      fetch("http://localhost:8080/api/login", config)
        .then(response => response.json())
        .then(data =>
          dispatch({
            type: LOGIN_OK,
            payload: data,
          })
        );
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
  const mudarSenha = async dadosForm => {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosForm),
    };

    try {
      fetch("http://localhost:8080/api/mudarsenha", config)
        .then(response => response.json())
        .then(data => dispatch({ type: MUDAR_SENHA_OK, payload: data }));
    } catch (err) {
      dispatch({ type: MUDAR_SENHA_FAIL, payload: err });
    }
  };
  const mudarSenhaTrue = () => {
    dispatch({ type: MUDAR_SENHA_TRUE });
  };
  const mudarSenhaFalse = () => {
    dispatch({ type: MUDAR_SENHA_FALSE });
  };
  const cadastrarTrue = () => {
    dispatch({ type: CADASTRAR_TRUE });
  };
  const cadastrarFalse = () => {
    dispatch({ type: CADASTRAR_FALSE });
  };

  // cadastrar
  const cadastrar = async dadosForm => {
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosForm),
    };
    try {
      fetch("http://localhost:8080/api/cadastrar", config)
        .then(response => response.json())
        .then(data => dispatch({ type: CADASTRAR_OK, payload: data }));
    } catch (err) {
      dispatch({ type: CADASTRAR_FAIL, payload: err });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        //token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        cadastrarState: state.cadastrarState,
        mudarSenhaState: state.mudarSenhaState,
        logout,
        login,
        cadastrar,
        cadastrarTrue,
        cadastrarFalse,
        mudarSenha,
        mudarSenhaFalse,
        mudarSenhaTrue,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
