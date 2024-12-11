const SubmitButton = (props) => {
  return (
    <button
      {...props}
      className="bg-green-300 disabled:opacity-50 font-semibold px-2 py-1 rounded-md border-2 border-solid border-green-600 w-44 mx-auto my-5"
    >
      {props.children}
    </button>
  );
};

export default SubmitButton;
