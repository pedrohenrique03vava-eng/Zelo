import { useNavigate } from "react-router-dom";
import { useState } from "react";
import vendedorIcon from "../../assets/515-5153597_cliente-icon-png-customer-icon-vector-png-transparent-removebg-preview.png";
import clienteIcon from "../../assets/1000_F_438551843_LREDXHQqt7RniIDGckMN5bH9Ce6AnBgy-removebg-preview.png";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [cargo, setCargo] = useState("opcaoCargo");

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = (e) => {
    e.preventDefault();
    console.log("Dados enviados;", { cargo, nome, email, senha });
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="panel-left">
          <h2>Bem - vindo de volta</h2>
          <p>Acesse sua conta agora</p>
          <button onClick={() => navigate("/main")} className="btn-outline">
            Entrar
          </button>
        </div>

        {cargo === "opcaoCargo" && (
          <div className="panel-right animate-fade">
            <h1>Cadastre-se como:</h1>
            <div className="opcao-div">
              <button
                className={`opcao ${cargo === "vendedor" ? "ativo" : ""}`} // Ajustado para 'ativo' coincidir com o CSS
                onClick={() => setCargo("vendedor")}
              >
                <img className="imgs" src={vendedorIcon} alt="Vendedor" />
                Vendedor
              </button>

              <button
                className={`opcao ${cargo === "cliente" ? "ativo" : ""}`} // Ajustado para 'ativo' coincidir com o CSS
                onClick={() => setCargo("cliente")}
              >
                <img className="imgs" src={clienteIcon} alt="Cliente" />
                Cliente
              </button>
            </div>
          </div>
        )}

        {cargo !== "opcaoCargo" && (
          <div className="panel-right animate-fade">
            {" "}
            <form onSubmit={handleCadastro} className="login-form">
              <h2>Cadastro como: {cargo}</h2>

              <div className="input-group">
                <input
                  type="text"
                  placeholder="NOME"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="email"
                  placeholder="E-MAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <input
                  type="password"
                  placeholder="SENHA"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                onClick={enviarDados()}
                className="btn-solid"
              >
                Cadastrar
              </button>

              <button
                type="button"
                onClick={() => setCargo("opcaoCargo")}
                className="btn-outline"
                style={{
                  marginTop: "15px",
                  width: "100%",
                  color: "#0ba360",
                  borderColor: "#0ba360",
                }}
              >
                Voltar
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
