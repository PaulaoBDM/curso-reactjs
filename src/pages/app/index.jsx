import "./App.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="pagina-app">
      <h2 className="titulo">
        App
        <i className="fa fa-heart"></i>
      </h2>

      <ul>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </div>
  );
}
