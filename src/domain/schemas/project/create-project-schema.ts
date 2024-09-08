import * as yup from 'yup';

export const createProjectSchema = yup.object({
  body: yup.object({
    name: yup
      .string()
      .min(2, 'O nome do projeto deve conter ao menos 2 caracteres.')
      .required('O nome é obrigatório.'),
    color: yup
      .string()
      .min(7, 'A cor deve conter ao menos 7 caracteres')
      .required('A cor é obrigatória'),
  }),
});
