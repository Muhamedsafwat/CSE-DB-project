import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

import InputField from "../../components/forms/InputField";
import ErrorSpan from "../../components/forms/ErrorSpan";
import SubmitButton from "../../components/forms/SubmitButton";

const AddCustomer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    //data.publisherId = publisherId;
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/publishers", data);
      console.log(res);
      swal({
        title: "Success!",
        text: "Publisher added successfully",
        icon: "success",
      }).then(() => navigate(-1));
    } catch (err) {
      console.log(err);
      swal({ title: "Error!", text: "Check your server logs", icon: "error" });
    }

    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-16">
        <h1 className="text-3xl font-bold mb-5">Add Publisher</h1>
        <label>Name</label>
        <InputField required={true} name="name" register={register} />
        {errors.name && <ErrorSpan>This field is required</ErrorSpan>}
        <label>Phone Number</label>
        <InputField required={true} name="phone" register={register} />
        {errors.phone && <ErrorSpan>This field is required</ErrorSpan>}
        <label>Address</label>
        <InputField required={true} name="address" register={register} />
        {errors.address && <ErrorSpan>This field is required</ErrorSpan>}

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? "Loading" : "Submit"}
        </SubmitButton>
      </form>
    </>
  );
};

export default AddCustomer;
