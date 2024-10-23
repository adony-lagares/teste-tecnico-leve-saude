import { IAgendamento } from "./interface/IAgendamento";

export const validateAgendamento = (data: IAgendamento): string | null => {
  if (!data.medico_id || !data.paciente_nome || !data.data_horario) {
    return "Todos os campos são obrigatórios.";
  }

  return null;
};
