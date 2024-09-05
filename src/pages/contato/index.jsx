import "./Contato.css";
import { Link } from "react-router-dom";
export default function Contato() {
  return (
    <div className="pagina-contato">
      <h2>Contato</h2>
      <img className="icone" src="/assets/images/contato.png" />

      <Link to="/">App</Link>
    </div>
  );
}
