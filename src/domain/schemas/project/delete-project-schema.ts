import * as yup from 'yup';

export const deleteProjectSchema = yup.object({
  params: yup.object({
    id: yup.string().required('O id é obrigatório.'),
  }),
});
