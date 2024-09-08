import * as yup from 'yup';

export const findAllPaginatedTagsSchema = yup.object({
  query: yup.object({
    page: yup.number().positive('A pagina deve ser um valor positivo').required('A pagina é obrigatória.'),
    limit: yup.number(),
  }),
});
