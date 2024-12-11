import { useForm } from "react-hook-form";

import InputField from "../../components/forms/InputField";
import ErrorSpan from "../../components/forms/ErrorSpan";
import SubmitButton from "../../components/forms/SubmitButton";

const AddOrder = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-16">
        <h1 className="text-3xl font-bold mb-5">Add Order</h1>
        <label>Name</label>
        <InputField defaultValue="test" {...register("example")} />
        <label>Password</label>

        <InputField {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && (
          <ErrorSpan>This field is required</ErrorSpan>
        )}

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </>
  );
};

export default AddOrder;