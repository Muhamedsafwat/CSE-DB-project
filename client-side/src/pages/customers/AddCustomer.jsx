import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

import InputField from "../../components/forms/InputField";
import ErrorSpan from "../../components/forms/ErrorSpan";
import SubmitButton from "../../components/forms/SubmitButton";

const AddCustomer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/customers", data);
      swal({
        title: "Success!",
        text: "Customer added successfully",
        icon: "success",
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
      swal({ title: "Error!", text: "Check your server logs", icon: "error" });
    }

    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-16">
        <h1 className="text-3xl font-bold mb-5">Add Customer</h1>
        <label>Name</label>
        <InputField required={true} name="name" register={register} />
        {errors.username && <ErrorSpan>This field is required</ErrorSpan>}
        <label>Email</label>
        <InputField required={true} name="email" register={register} />
        {errors.password && <ErrorSpan>This field is required</ErrorSpan>}
        <label>Phone</label>
        <InputField required={true} name="phone" register={register} />
        {errors.password && <ErrorSpan>This field is required</ErrorSpan>}

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? "Loading" : "Submit"}
        </SubmitButton>
      </form>
    </>
  );
};

export default AddCustomer;
