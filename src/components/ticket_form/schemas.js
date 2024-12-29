import * as Yup from "yup";

const validationSchema = Yup.object({
  avatar: Yup.mixed()
    .required("Avatar is required"),
  fullName: Yup.string()
    .required("is required")
    .min(2, "Min 2 characters"),
  email: Yup.string()
    .required("is required")
    .email("Invalid email format"),
  github: Yup.string()
    .required("is required"),
});

export default validationSchema;
