"use client";

const ErrorPage = ({ error, reset }) => {
  console.log(error);
  return (
    <div>
      <h1 className="text-center text-red-500 my-5 text-xl">
        Something Went Wrong!!!
      </h1>
      <p className="text-center text-red-500 my-5 text-xl">{error.message}</p>

      <div className="text-center">
        <button
          onClick={() => reset()}
          className="mt-4 bg-red-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
