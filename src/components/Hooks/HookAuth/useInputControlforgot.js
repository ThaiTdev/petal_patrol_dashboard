import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export const useInputControlforgot = () => {
  const schema = yup
    .object({
      email: yup
        .string()
        .email("Veuillez entrer une adreese mail valide")
        .max(255)
        .required("Veuillez entrer une adresse mail valide"),
    })

    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  return [register, handleSubmit, errors];
};
