import React, { useState } from "react";
import { NameFields } from "./NameFields";

export function SignUp({ setIsSignUp }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      console.log("User registered:", data);
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-600">
          Welcome to Mindifi
        </h2>
        <form onSubmit={handleSubmit}>
          <NameFields handleChange={handleChange} formData={formData} />
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm text-gray-700 border border-indigo-300 rounded"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm text-gray-700 border border-indigo-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 text-white bg-indigo-600 rounded"
          >
            Register
          </button>
        </form>
        {/* Conditional rendering of the switch button */}
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <button
            onClick={() => setIsSignUp(false)}
            className="text-indigo-600 underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}
