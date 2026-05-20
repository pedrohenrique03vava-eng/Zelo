import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-screen">
      <div className="login-card">
        
        <div className="panel-left">
          <h2>Bem - vindo de volta</h2>
          <p>Acesse sua conta agora</p>
          <button onClick={() => navigate("/")} className="btn-outline">
            Entrar
          </button>
        </div>

        
        <div className="panel-right">
          <h1>Cria sua conta</h1>
          <form onSubmit={(e) => e.preventDefault()} className="login-form">
            <div className="input-group">
              <span className="input-icon">
                
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </span>
              <input type="text" placeholder="NOME" required />
            </div>
            
            <div className="input-group">
              <span className="input-icon">
                
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input type="email" placeholder="E-MAIL" required />
            </div>

            <div className="input-group">
              <span className="input-icon">
                
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input type="password" placeholder="SENHA" required />
            </div>

            <button type="submit" className="btn-solid">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
