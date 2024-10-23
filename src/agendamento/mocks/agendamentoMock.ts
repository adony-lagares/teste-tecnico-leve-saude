import { IAgendamento } from '../interface/IAgendamento';

export const getAgendamentoMock = (medico_id: number, paciente_nome: string, data_horario: string): IAgendamento => {
  const medicos = {
    1: "Dr. João Silva",
    2: "Dra. Maria Souza"
  };

  return {
    medico_id: medico_id,
    paciente_nome: paciente_nome,
    data_horario: data_horario
  };
};
