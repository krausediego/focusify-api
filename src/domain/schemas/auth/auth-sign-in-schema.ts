import * as yup from 'yup';

export const authSignInSchema = yup.object({
  body: yup.object({
    email: yup
      .string()
      .email('Digite um email válido')
      .required('O email é obrigatório.'),
    password: yup
      .string()
      .min(6, 'A senha deve conter ao menos 6 caracteres')
      .required('A senha é obrigatória'),
  }),
});
