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
  ALERTA_FALSE,
  AUTENTICADO_TRUE,
  AUTENTICADO_FALSE,
} from "../types";

const AuthState = props => {
  const initialState = {
    autenticadoState: false,
    usuario: null,
    cadastrarState: false,
    mudarSenhaState: false,
    alerta: false,
    alertaTexto: "",
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  //autenticado
  const autenticadoTrue = () =>
    dispatch({
      type: AUTENTICADO_TRUE,
    });

  const autenticadoFalse = () =>
    dispatch({
      type: AUTENTICADO_FALSE,
    });

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

    fetch("http://localhost:8080/api/login", config)
      .then(result => {
        if (!result.ok) throw result;
        return result.json();
      })
      .then(result => {
        dispatch({ type: LOGIN_OK, payload: result });
      })
      .catch(err => {
        err.json().then(body => {
          dispatch({
            type: LOGIN_FAIL,
            payload: body,
          });
        });
      });
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

    fetch("http://localhost:8080/api/mudarsenha", config)
      .then(result => {
        if (!result.ok) throw result;
        return result.json();
      })
      .then(result => {
        dispatch({ type: MUDAR_SENHA_OK, payload: result });
      })
      .catch(err => {
        err.json().then(body => {
          dispatch({
            type: MUDAR_SENHA_FAIL,
            payload: body,
          });
        });
      });
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

  const alertaFalse = () => {
    dispatch({ type: ALERTA_FALSE });
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
      fetch("http://localhost:8080/api/cadastro", config)
        .then(res => res.json())
        .then(data => dispatch({ type: CADASTRAR_OK, payload: data }));
    } catch (err) {
      dispatch({ type: CADASTRAR_FAIL, payload: err });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        autenticadoState: state.autenticadoState,
        usuario: state.usuario,
        cadastrarState: state.cadastrarState,
        mudarSenhaState: state.mudarSenhaState,
        alerta: state.alerta,
        alertaTexto: state.alertaTexto,
        logout,
        login,
        cadastrar,
        cadastrarTrue,
        cadastrarFalse,
        mudarSenha,
        mudarSenhaFalse,
        mudarSenhaTrue,
        alertaFalse,
        autenticadoTrue,
        autenticadoFalse,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
