import { APIGatewayProxyHandler } from "aws-lambda";

/**
 * @swagger
 * /agendamento:
 *   post:
 *     summary: Marcar agendamento do paciente
 *     description: Endpoint para marcar um agendamento com um médico.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               medico_id:
 *                 type: integer
 *                 description: ID do médico
 *                 example: 1
 *               paciente_nome:
 *                 type: string
 *                 description: Nome do paciente
 *                 example: "Carlos Almeida"
 *               data_horario:
 *                 type: string
 *                 description: Data e horário do agendamento
 *                 example: "2024-10-05 09:00"
 *     responses:
 *       200:
 *         description: Agendamento realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: "Agendamento realizado com sucesso"
 *                 agendamento:
 *                   type: object
 *                   properties:
 *                     medico:
 *                       type: string
 *                       example: "Dr. João Silva"
 *                     paciente:
 *                       type: string
 *                       example: "Carlos Almeida"
 *                     data_horario:
 *                       type: string
 *                       example: "2024-10-05 09:00"
 */
export const handler: APIGatewayProxyHandler = async (event) => {
  const { medico_id, paciente_nome, data_horario } = JSON.parse(
    event.body || "{}"
  );

  if (!medico_id || !paciente_nome || !data_horario) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        mensagem: "Dados de agendamento incompletos",
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      mensagem: "Agendamento realizado com sucesso",
      agendamento: {
        medico: `Médico ${medico_id}`,
        paciente: paciente_nome,
        data_horario: data_horario,
      },
    }),
  };
};
