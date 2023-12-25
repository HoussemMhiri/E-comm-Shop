import * as yup from "yup";

export const regSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
});
export const logSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
});
