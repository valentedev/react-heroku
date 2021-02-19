import {
  LOGIN_OK,
  LOGOUT_OK,
  MUDAR_SENHA_OK,
  MUDAR_SENHA_FAIL,
  MUDAR_SENHA_FALSE,
  MUDAR_SENHA_TRUE,
  CADASTRAR_TRUE,
  CADASTRAR_FALSE,
  LOGIN_FAIL,
  ALERTA_FALSE,
} from "../types";

export default function Reducer(state, action) {
  switch (action.type) {
    case LOGIN_OK:
      localStorage.setItem("session-token", action.payload);
      return {
        ...state,
        ...action.payload,
        autenticado: true,
        alerta: false,
        alertaTexto: "",
      };
    case LOGIN_FAIL:
      return {
        ...state,
        ...action.payload,
        autenticado: false,
        usuario: null,
        alerta: true,
        alertaTexto: action.payload,
      };
    case LOGOUT_OK:
      localStorage.removeItem("session-token");
      return {
        ...state,
        ...action.payload,
        autenticado: false,
        usuario: null,
      };

    case MUDAR_SENHA_OK:
      return {
        ...state,
        ...action.payload,
        mudarSenhaState: false,
        alerta: true,
        alertaTexto: action.payload,
      };
    case MUDAR_SENHA_FAIL:
      return {
        ...state,
        ...action.payload,
        autenticado: false,
        usuario: null,
        alerta: true,
        alertaTexto: action.payload,
      };
    case MUDAR_SENHA_TRUE:
      return {
        ...state,
        mudarSenhaState: true,
      };
    case MUDAR_SENHA_FALSE:
      return {
        ...state,
        mudarSenhaState: false,
      };
    case CADASTRAR_TRUE:
      return {
        ...state,
        cadastrarState: true,
      };
    case CADASTRAR_FALSE:
      return {
        ...state,
        cadastrarState: false,
      };
    case ALERTA_FALSE:
      return {
        ...state,
        alerta: false,
        alertaTexto: "",
      };
    default:
      return state;
  }
}
