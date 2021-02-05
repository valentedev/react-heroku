import { LOGIN_OK, LOGOUT_OK } from "../types";

export default function Reducer(state, action) {
  switch (action.type) {
    case LOGIN_OK:
      localStorage.setItem("session-token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        autenticado: true,
        user: action.payload,
      };
    case LOGOUT_OK:
      // localStorage.removeItem("session-token", action.payload.token);
      localStorage.removeItem("session-token");
      return {
        ...state,
        ...action.payload,
        token: null,
        autenticado: false,
        user: null,
      };
    default:
      return state;
  }
}
