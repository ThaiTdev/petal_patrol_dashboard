import { useForm } from "react-hook-form";

const TestValueInput = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="name" {...register("name")} />
      <input type="text" name="firstname" {...register("firstname")} />
      <button type="submit">validez</button>
    </form>
  );
};

export default TestValueInput;
