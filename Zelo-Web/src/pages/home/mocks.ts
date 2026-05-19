export interface Produto {
  id: string;
  nome: string;
  quantidadeAtual: number;
  quantidadeMinima: number;
}

export interface Agendamento {
  id: string;
  clienteNome: string;
  servico: string;
  valor: number;
  horario: string;
}

export const produtosMock: Produto[] = [
  {
    id: "1",
    nome: "Shampoo Queratina 1L",
    quantidadeAtual: 150,
    quantidadeMinima: 200,
  }, // Alerta!
  {
    id: "2",
    nome: "Creme de Hidratação 1kg",
    quantidadeAtual: 800,
    quantidadeMinima: 300,
  },
];

export const agendamentosHojeMock: Agendamento[] = [
  {
    id: "101",
    clienteNome: "Maria Souza",
    servico: "Progressiva",
    valor: 150,
    horario: "09:00",
  },
  {
    id: "102",
    clienteNome: "Ana Costa",
    servico: "Corte + Hidratação",
    valor: 80,
    horario: "10:30",
  },
  {
    id: "103",
    clienteNome: "Lucas Lima",
    servico: "Barba",
    valor: 40,
    horario: "13:00",
  },
  {
    id: "104",
    clienteNome: "Vitoria Verne",
    servico: "Progressiva",
    valor: 150,
    horario: "14:30",
  },
];
