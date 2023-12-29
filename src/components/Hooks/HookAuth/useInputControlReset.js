import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export const useInputControlReset = () => {
  const schema = yup
    .object()
    .shape({
      password: yup
        .string()
        .min(8, "Le mot de passe doit comporter au moins 8 caractères")
        .matches(
          /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
          "Le mot de passe doit comporter au moins une lettre majuscule, un caractère spécial et un chiffre"
        )
        .max(255)
        .required("Merci de rentrer un mot de passe valide"),
      passwordConfimReset: yup
        .string()
        .min(8, "Le mot de passe doit être identique")
        .oneOf(
          [yup.ref("password"), null],
          "Le mot de passe de confirmation doit être identique au mot de passe"
        )
        .matches(
          /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
          "Le mot de passe doit être identique"
        )
        .max(255)
        .required("Merci de confirmer le mot de passe"),
    })

    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return [register, handleSubmit, errors];
};
