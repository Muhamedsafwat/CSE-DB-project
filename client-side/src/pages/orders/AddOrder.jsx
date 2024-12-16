import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { BiPlus } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

import InputField from "../../components/forms/InputField";
import ErrorSpan from "../../components/forms/ErrorSpan";
import SubmitButton from "../../components/forms/SubmitButton";

const AddCustomer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNums, setPhoneNums] = useState([]);
  const [currentBookName, setCurrentBookName] = useState("");
  const [currentBookQuantity, setCurrentBookQuantity] = useState(1);
  const [bookNames, setBookNames] = useState([]);
  const [books, setBooks] = useState([]);

  const addBook = () => {
    if (!currentBookName || !currentBookQuantity) {
      swal({
        title: "Incorrect information",
        text: "Please fill all the fields",
        icon: "warning",
      });
      return;
    }
    setBooks([
      ...books,
      { name: currentBookName, quantity: currentBookQuantity },
    ]);
    setCurrentBookName("");
    setCurrentBookQuantity(1);
  };

  useEffect(() => {
    const getNumbers = async () => {
      const res = await axios.get("http://localhost:3000/customers/numbers");
      setPhoneNums(res.data);
    };

    const getBookNames = async () => {
      const res = await axios.get("http://localhost:3000/books/names");
      setBookNames(res.data);
    };

    getBookNames();
    getNumbers();
  }, []);

  //remove book
  const removeBook = (isbn) => {
    setBooks(books.filter((book) => book.ISBN !== isbn));
  };

  //form configurations
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //submit handler
  const onSubmit = async (data) => {
    const requestBody = { ...data, books };

    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/orders", requestBody);
      swal({
        title: "Success!",
        text: "Order added successfully",
        icon: "success",
      });
    } catch (err) {
      console.log(err);
      swal({
        title: "Network Error!",
        text: "Please check your connection",
        icon: "error",
      });
    }

    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-16">
        <h1 className="text-3xl font-bold mb-5">Place Order</h1>
        <div className="flex gap-5">
          <div className="flex flex-col flex-grow">
            <label>Customer Phone</label>
            <InputField
              list="phoneNums"
              required={true}
              name="phone"
              register={register}
              type="number"
            />
            {errors.username && <ErrorSpan>This field is required</ErrorSpan>}
            <datalist id="phoneNums">
              {phoneNums.map((item, index) => (
                <option key={index} value={`0${item.PhoneNumber}`} />
              ))}
            </datalist>
          </div>
          <div className="flex flex-col flex-grow">
            <label>Employee ID</label>
            <InputField required={true} name="employeeId" register={register} />
            {errors.password && <ErrorSpan>This field is required</ErrorSpan>}
          </div>
        </div>
        <label>Payment method</label>
        <InputField required={true} name="paymentMethod" register={register} />
        {errors.password && <ErrorSpan>This field is required</ErrorSpan>}
        {/*Add Books fields*/}

        <label>Add Book</label>
        <div className="flex gap-5 items-start">
          <input
            value={currentBookName}
            onChange={(e) => setCurrentBookName(e.target.value)}
            list="bookNames"
            placeholder="Book Name"
            className={`bg-gray-100 mb-5 mt-1 border-2 border-gray-300 text-gray-900 text-sm rounded-md duration-150 focus:outline-none active:ring-0 focus:border-green-500 p-2.5 flex-grow`}
          />
          <datalist id="bookNames">
            {bookNames.map((item) => (
              <option key={item.BookName} value={item.BookName} />
            ))}
          </datalist>
          <input
            value={currentBookQuantity}
            onChange={(e) => setCurrentBookQuantity(e.target.value)}
            min={1}
            placeholder="Quantity"
            type="number"
            className={`bg-gray-100 mb-5 mt-1 border-2 border-gray-300 text-gray-900 text-sm rounded-md duration-150 focus:outline-none active:ring-0 focus:border-green-500 p-2.5 flex-grow`}
          />
          <button
            type="button"
            onClick={addBook}
            className="bg-green-400 aspect-square border-4 border-green-500 text-white p-2 rounded-full hover:bg-green-500 duration-200 shadow-xl "
          >
            <BiPlus size={26} />
          </button>
        </div>
        {!!books.length && (
          <>
            <h2 className="font-bold text-2xl">Books to order: </h2>
            {books.map((book, index) => (
              <div
                key={index}
                className="flex gap-20 text-lg font-medium items-center rounded-md border border-gray-300 px-5 py-2 my-2"
              >
                <p className="min-w-32">{book.name}</p>
                <p>x{book.quantity}</p>
                <button
                  type="button"
                  onClick={() => removeBook(book.ISBN)}
                  className="bg-red-400 ml-auto aspect-square border-2 border-red-500 text-white p-2 rounded-full hover:bg-red-500 duration-200 shadow-xl "
                >
                  <MdDeleteOutline size={16} />
                </button>
              </div>
            ))}
          </>
        )}
        {/*Submit*/}
        <SubmitButton type="submit" disabled={isLoading || books.length <= 0}>
          {isLoading ? "Loading" : "Submit"}
        </SubmitButton>
      </form>
    </>
  );
};

export default AddCustomer;
