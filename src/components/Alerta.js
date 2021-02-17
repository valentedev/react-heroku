import { useContext } from "react";
import AuthContext from "../context/context";

const Alerta = () => {
  const authContext = useContext(AuthContext);
  const { alertaTexto, alertaFalse } = authContext;

  const Fechar = () => {
    alertaFalse();
  };

  return (
    <div className="alerta">
      <div>
        {alertaTexto}
        <button type="submit" onClick={Fechar}>
          <i class="fas fa-times-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default Alerta;
