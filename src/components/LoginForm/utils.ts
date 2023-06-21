import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  password: Yup.string().required("required"),
  email: Yup.string().email("invalid").required("required"),
});
