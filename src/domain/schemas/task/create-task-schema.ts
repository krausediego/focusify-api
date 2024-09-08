import * as yup from 'yup';

export const createTaskSchema = yup.object({
  body: yup.object({
    name: yup.string().min(4, 'O nome da tarefa deve conter ao menos 4 caracteres.').required('O nome é obrigatório'),
    estimatedPomodoros: yup.number().positive('O valor de tempos deve ser positivo.').required('A quantidade de tempos é obrigatória.'),
    date: yup.string().required('A data é obrigatória'),
    priority: yup.mixed().oneOf(['HIGH', 'MEDIUM', 'LOW', 'NOPRIORITY']).required('A prioridade é obrigatória.'),
    tagIds: yup.array(yup.string()).required('As tags são obrigatórias.'),
    projectId: yup.string().required('O projeto é obrigatório'),
  }),
});
