const InputField = ({ register, name, required }) => (
  <input
    className="bg-gray-100 mb-5 mt-1 border-2 border-gray-300 text-gray-900 text-sm rounded-md duration-150 focus:outline-none active:ring-0 focus:border-green-500 p-2.5"
    {...register(name, { required })}
  />
);

export default InputField;
