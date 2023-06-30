import * as yup from 'yup';

export const designValidationSchema = yup.object().shape({
  title: yup.string().required(),
  image: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
