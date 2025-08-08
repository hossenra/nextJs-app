"use client";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/dashboard");
  };
  return (
    <div className="text-center">
      <h1 className="text-4xl text-center">Welcome to Next Js Home Page</h1>
      <button onClick={handleNavigation} className="my-5">
        Dashboard
      </button>
    </div>
  );
};

export default HomePage;
