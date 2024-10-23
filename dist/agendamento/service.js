"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAgendamento = void 0;
const validateAgendamento = (data) => {
    if (!data.medico_id || !data.paciente_nome || !data.data_horario) {
        return "Todos os campos são obrigatórios.";
    }
    return null;
};
exports.validateAgendamento = validateAgendamento;
