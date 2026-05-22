import { useNavigate } from "react-router-dom";
import { useState } from "react";
import vedendor from "../../assets/515-5153597_cliente-icon-png-customer-icon-vector-png-transparent-removebg-preview.png";
import cliente from "../../assets/1000_F_438551843_LREDXHQqt7RniIDGckMN5bH9Ce6AnBgy-removebg-preview.png";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [cargo, setCargo] = useState("");

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="panel-left">
          <h2>Bem - vindo de volta</h2>
          <p>Acesse sua conta agora</p>
          <button onClick={() => navigate("/main")} className="btn-outline">
            Entrar
          </button>
          <div className=""></div>
        </div>

        {cargo === "" && (
          <div className="panel-right">
            <h1>Cadastre-se como:</h1>
            <div className="opcao-div">
              <button
                className={`opcao ${cargo === "vendedor" ? "active" : ""}`}
                onClick={() => setCargo("vendedor")}
              >
                <img className="imgs" src={vedendor} alt="" />
                Vendedor
              </button>

              <button
                className={`opcao ${cargo === "cliente" ? "active" : ""}`}
                onClick={() => setCargo("cliente")}
              >
                <img className="imgs" src={cliente} alt="" />
                Cliente
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
        {cargo === "vendedor" && (
          <form onSubmit={(e) => e.preventDefault()} className="login-form">
            <h2>Cadastro como: {cargo}</h2>
            <div className="input-group">
              <span className="input-icon"></span>
              <input type="text" name="nome" placeholder="NOME" required />
            </div>

            <div className="input-group">
              <span className="input-icon"></span>
              <input type="email" name="email" placeholder="E-MAIL" required />
            </div>

            <div className="input-group">
              <span className="input-icon"></span>
              <input
                type="password"
                name="senha"
                placeholder="SENHA"
                required
              />
            </div>

            <button type="submit" className="btn-solid">
              Cadastrar
            </button>

            <button
              type="button"
              onClick={() => setCargo("")}
              className="btn-outline"
              style={{ marginTop: "10px", width: "100%" }}
            >
              Voltar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
