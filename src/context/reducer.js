import {
  LOGIN_OK,
  LOGOUT_OK,
  MUDAR_SENHA_OK,
  MUDAR_SENHA_FALSE,
  MUDAR_SENHA_TRUE,
  CADASTRAR_TRUE,
  CADASTRAR_FALSE,
} from "../types";

export default function Reducer(state, action) {
  switch (action.type) {
    case LOGIN_OK:
      localStorage.setItem("session-token", action.payload.Token);
      return {
        ...state,
        ...action.payload,
        autenticado: true,
        usuario: action.payload.Usuario,
        token: action.payload.Token,
      };
    case LOGOUT_OK:
      localStorage.removeItem("session-token");
      return {
        ...state,
        ...action.payload,
        token: null,
        autenticado: false,
        usuario: null,
      };
    case MUDAR_SENHA_OK:
      return {
        ...state,
        mudarSenhaState: false,
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
    default:
      return state;
  }
}
