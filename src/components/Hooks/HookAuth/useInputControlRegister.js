import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export const useInputControlRegister = () => {
  const schema = yup
    .object()
    .shape({
      selectedOption: yup.string().min(1, "veuillez choisir une catégorie"),
      emailRegister: yup
        .string()
        .email("Merci de rentrer une adresse mail valide")
        .max(255)
        .required("Merci de rentrer une adresse mail valide"),
      passwordRegister: yup
        .string()
        .min(8, "Le mot de passe doit comporter au moins 8 caractères")
        .matches(
          /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
          "Le mot de passe doit comporter au moins une lettre majuscule, un caractère spécial et un chiffre"
        )
        .max(255)
        .required("Merci de rentrer un mot de passe valide"),
      passwordConfimRegister: yup
        .string()
        .min(8, "Le mot de passe doit être identique")
        .oneOf(
          [yup.ref("passwordRegister"), null],
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
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return [register, handleSubmit, setValue, errors];
};
