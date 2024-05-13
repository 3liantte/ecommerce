"use client";

import Image from "next/image";
import Logo from "../../public/GrocCheck_Logo-removebg.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleRouterToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <h2 className="text-6xl mb-8 text-center">
        Welcome to GrocCheck Markets
      </h2>
      <Image
        src={Logo} // Replace with the path to your image
        alt="Welcome Image"
        width={400} // Adjust width as needed
        height={300} // Adjust height as needed
        className="rounded-lg mb-8"
      />
      <div className="flex space-x-4">
        <button
          onClick={handleRouterToDashboard}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Get Started
        </button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
}
