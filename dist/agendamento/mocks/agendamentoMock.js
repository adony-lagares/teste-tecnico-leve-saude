"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgendamentoMock = void 0;
const getAgendamentoMock = (medico_id, paciente_nome, data_horario) => {
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
exports.getAgendamentoMock = getAgendamentoMock;
