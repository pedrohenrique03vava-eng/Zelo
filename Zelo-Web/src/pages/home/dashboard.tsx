import "./dashboard.css";
import { agendamentosHojeMock, produtosMock } from "./mocks";
import login from "../../assets/download-removebg-preview (1).png"
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate()
  return (
    <div id="father">
      <h1>Zelo</h1>
      <small>Cuidado nunca e de mais.</small>
      <button id="button-login" onClick={() => navigate("/perfil")}><img src={login} alt="" />
      
      </button>
      <div>
        <h2>Agenda Diaria {}</h2>
      </div>
      <div className="cardao">
        <h2 className="titulo-cardao">Visão Geral do Dia</h2>

        <div id="nome">
          <section className="sessao">
            <h3>Agendamentos hoje: {agendamentosHojeMock.length}</h3>
            {agendamentosHojeMock.map((cliente) => {
              return (
                <ul key={cliente.id}>
                  <li>Nome: {cliente.clienteNome}</li>
                  <li>Serviço: {cliente.servico}</li>
                  <li>Valor: R$ {cliente.valor},00</li>
                  <li>Horário: {cliente.horario}</li>
                  <button className="concluido">Concluido</button>
                  <button className="remove">Remover</button>
                </ul>
              );
            })}
          </section>
            <section className="sessao">
              <h3>Produtos</h3>
              {produtosMock.map((produto) => {
                return (
                  <ul key={produto.id}>
                    <li>Nome: {produto.nome}</li>
                    <li>Quantidade Atual: {produto.quantidadeAtual}</li>
                    <li>Quantidade Minima {produto.quantidadeMinima}</li>
                  </ul>
                );
              })}
            </section>
        </div>
      </div>
      <div>
        <div>
          <h3>Alertas!</h3>
        </div>
  </div>

    </div>
  );
}

export default App;
