import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

import InputField from "../../components/forms/InputField";
import ErrorSpan from "../../components/forms/ErrorSpan";
import SubmitButton from "../../components/forms/SubmitButton";

const AddBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);

  const navigate = useNavigate();

  const getFormData = async () => {
    const categoriesRes = await axios.get("http://localhost:3000/categories");
    const authorsRes = await axios.get("http://localhost:3000/authors");
    const publishersRes = await axios.get(
      "http://localhost:3000/publishers/names"
    );

    setCategories(categoriesRes.data);
    setAuthors(authorsRes.data);
    setPublishers(publishersRes.data);
  };

  useEffect(() => {
    getFormData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      //  console.log(data);
      const res = await axios.post("http://localhost:3000/books", data);
      swal({
        title: "Success!",
        text: "Book added successfully",
        icon: "success",
      });
      navigate(-1);
    } catch (err) {
      console.log(err);
      swal({ title: "Error!", text: "Check your server logs", icon: "error" });
    }

    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-16">
        <h1 className="text-3xl font-bold mb-5">Add Book</h1>
        <label>Publisher</label>
        <InputField
          list="publishers"
          required={true}
          name="publisher"
          register={register}
        />
        {errors.publisher && <ErrorSpan>This field is required</ErrorSpan>}
        <datalist id="publishers">
          {publishers.map((publisher) => (
            <option
              key={publisher.PublisherName}
              value={publisher.PublisherName}
            />
          ))}
        </datalist>
        <div className="flex gap-5">
          <div className="flex flex-col flex-grow">
            <label>Name</label>
            <InputField required={true} name="name" register={register} />
            {errors.username && <ErrorSpan>This field is required</ErrorSpan>}
          </div>
          <div className="flex flex-col">
            <label>Quantity</label>
            <InputField
              min={1}
              defaultValue={1}
              type="number"
              required={true}
              name="quantity"
              register={register}
            />
            {errors.quantity && <ErrorSpan>This field is required</ErrorSpan>}
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col flex-grow">
            <label>ISBN</label>
            <InputField required={true} name="ISBN" register={register} />
            {errors.password && <ErrorSpan>This field is required</ErrorSpan>}
          </div>
          <div className="flex flex-col flex-grow">
            <label>Language</label>
            <InputField required={true} name="language" register={register} />
            {errors.password && <ErrorSpan>This field is required</ErrorSpan>}
          </div>
          <div className="flex flex-col flex-grow">
            <label>Price</label>
            <InputField
              type="number"
              min={1}
              required={true}
              name="price"
              register={register}
            />
            {errors.password && <ErrorSpan>This field is required</ErrorSpan>}
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col flex-grow">
            <label>Category</label>
            <InputField
              list="categories"
              required={true}
              name="category"
              register={register}
            />
            {errors.category && <ErrorSpan>This field is required</ErrorSpan>}
            <datalist id="categories">
              {categories.map((category) => (
                <option
                  key={category.CategoryName}
                  value={category.CategoryName}
                />
              ))}
            </datalist>
          </div>
          <div className="flex flex-col flex-grow">
            <label>Author</label>
            <InputField
              list="authors"
              required={true}
              name="author"
              register={register}
            />
            {errors.author && <ErrorSpan>This field is required</ErrorSpan>}
            <datalist id="authors">
              {authors.map((author) => (
                <option key={author.AuthorName} value={author.AuthorName} />
              ))}
            </datalist>
          </div>
        </div>

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? "Loading" : "Submit"}
        </SubmitButton>
      </form>
    </>
  );
};

export default AddBook;
