import * as yup from 'yup';

export const updateProjectSchema = yup.object({
  params: yup.object({
    id: yup.string().required('O id é obrigatório.'),
  }),
  body: yup.object({
    name: yup.string().min(2, 'O nome do projeto deve conter ao menos 2 caracteres.'),
    color: yup.string().min(7, 'A cor deve conter ao menos 7 caracteres'),
    status: yup.bool(),
  }),
});
