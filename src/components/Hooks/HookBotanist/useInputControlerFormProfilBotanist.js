import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export const useInputControlerFormProfilUser = (initialValues) => {
  const schema = yup
    .object()
    .shape({
      userName: yup.string().max(255).required("Merci d'entere votre nom"),
      userEmail: yup
        .string()
        .email("Veuillez entrer une adresse mail valide")
        .max(255)
        .required("Veuillez entrer une adresse mail valide"),
      validate_Account: yup.boolean(),
    })
    .required();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      userName: initialValues.userName,
      userEmail: initialValues.userEmail,
      validate_Account: initialValues.validate_Account,
    },
  });

  return [register, handleSubmit, setValue, errors];
};
