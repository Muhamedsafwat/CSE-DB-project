import { useState } from "react";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

import InputField from "../../components/forms/InputField";
import ErrorSpan from "../../components/forms/ErrorSpan";
import SubmitButton from "../../components/forms/SubmitButton";

const AddEmployee = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    // Add your API call here
    setTimeout(() => {
      setIsLoading(false);
      if (data) {
        // Display success message
        swal("Success!", "Employee added successfully", "success");
        console.log(data);
      } else {
        // Display error message
        swal("Error!", "Failed to add employee", "error");
      }
    }, 2000);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-16">
        <h1 className="text-3xl font-bold mb-5">Add Employee</h1>
        <label>Name</label>
        <InputField required={true} name="username" register={register} />
        {errors.username && <ErrorSpan>This field is required</ErrorSpan>}
        <label>Password</label>
        <InputField required={true} name="password" register={register} />
        {errors.password && <ErrorSpan>This field is required</ErrorSpan>}

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? "Loading" : "Submit"}
        </SubmitButton>
      </form>
    </>
  );
};

export default AddEmployee;
