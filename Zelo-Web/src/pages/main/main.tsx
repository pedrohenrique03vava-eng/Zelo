import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "./mockPerfil";
import { produtosMock, agendamentosHojeMock } from "../home/mocks";
import "../home/dashboard.css"
import "./main.css";

export default function Perfil() {
  const navigate = useNavigate(); 
  const [abaAtiva, setAbaAtiva] = useState("dados");

  return (
    <div className="perfil-page-container">
      
     
      <section className="leftContainer">
        <div className="user-avatar-block">
          <div className="avatar-circle">
            {userLogin.nome.charAt(0).toUpperCase()}
          </div>
          <h2>{userLogin.nome}</h2>
          <span className="user-role-badge">{userLogin.user}</span>
        </div>

        <nav className="menu-buttons">
          <button 
            className={`menu-btn ${abaAtiva === "dados" ? "active" : ""}`}
            onClick={() => setAbaAtiva("dados")}
          >
            Meus Dados
          </button>
          <button 
            className={`menu-btn ${abaAtiva === "seguranca" ? "active" : ""}`}
            onClick={() => setAbaAtiva("seguranca")}
          >
            Segurança e Senha
          </button>
          <button 
            className={`menu-btn ${abaAtiva === "ajuda" ? "active" : ""}`}
            onClick={() => setAbaAtiva("ajuda")}
          >
            Suporte e Ajuda
          </button>
          
         
          <button 
            className={`menu-btn ${abaAtiva === "dashboard" ? "active" : ""}`}
            onClick={() => setAbaAtiva("dashboard")}
          >
            Dashboard
          </button>
        </nav>
      </section>

      
      <section className="rightContainer">
        
       
        {abaAtiva === "dados" && (
          <div className="content-card animate-fade">
            <h3>Informações do Perfil</h3>
            <p className="section-description">Visualize e gerencie os dados cadastrais da sua conta administrativa.</p>
            
            <div className="info-grid">
              <div className="info-box">
                <label>Nome Completo</label>
                <p>{userLogin.nome}</p>
              </div>
              <div className="info-box">
                <label>Nível de Acesso</label>
                <p>{userLogin.user}</p>
              </div>
              <div className="info-box">
                <label>Status do Usuário</label>
                <p className="status-active">● Ativo no Sistema</p>
              </div>
            </div>
          </div>
        )}

        
        {abaAtiva === "dashboard" && (
          <div className="content-card animate-fade">
            <div className="cardao">
              <h2 className="titulo-cardao">Visão Geral do Dia</h2>

              <div id="nome" className="dashboard-content-grid">
                <section className="sessao">
                  <h3>Agendamentos hoje: {agendamentosHojeMock.length}</h3>
                  {agendamentosHojeMock.map((cliente) => (
                    <ul key={cliente.id} className="agendamento-lista">
                      <li><strong>Nome:</strong> {cliente.clienteNome}</li>
                      <li><strong>Serviço:</strong> {cliente.servico}</li>
                      <li><strong>Valor:</strong> R$ {cliente.valor},00</li>
                      <li><strong>Horário:</strong> {cliente.horario}</li>
                      <div className="action-buttons">
                        <button className="concluido">Concluído</button>
                        <button className="remove">Remover</button>
                      </div>
                    </ul>
                  ))}
                </section>

                <section className="sessao">
                  <h3>Produtos</h3>
                  {produtosMock.map((produto) => (
                    <ul key={produto.id} className="produto-lista">
                      <li><strong>Nome:</strong> {produto.nome}</li>
                      <li><strong>Quantidade Atual:</strong> {produto.quantidadeAtual}</li>
                      <li><strong>Quantidade Mínima:</strong> {produto.quantidadeMinima}</li>
                    </ul>
                  ))}
                </section>
              </div>
            </div>
          </div>
        )}

        
        {abaAtiva === "seguranca" && (
          <div className="content-card animate-fade">
            <h3>Segurança da Conta</h3>
            <p className="section-description">Mantenha sua conta segura atualizando suas credenciais regularmente.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="security-form">
              <div className="form-group">
                <label>Senha Atual</label>
                <input type="password" placeholder="••••••••" />
              </div>
              <div className="form-group">
                <label>Nova Senha</label>
                <input type="password" placeholder="Digite a nova senha" />
              </div>
              <button type="submit" className="btn-save-password">Alterar Senha</button>
            </form>
          </div>
        )}

        
        {abaAtiva === "ajuda" && (
          <div className="content-card animate-fade">
            <h3>Suporte Técnico</h3>
            <p className="section-description">Precisa de auxílio com o aplicativo Zelo? Entre em contato com o desenvolvedor.</p>
            <div className="help-box">
              <p>Email de suporte: <strong>suporte@zeloapp.com.br</strong></p>
              <p>Tempo de resposta estimado: <strong>Até 24 horas úteis</strong></p>
            </div>
          </div>
        )}

      </section>
    </div>
  );
}