"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // console.log("Hello from Counter");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Counter Application</h2>

      <div className="text-4xl font-bold mb-8">{count}</div>

      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Decrement
        </button>

        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Reset
        </button>

        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
