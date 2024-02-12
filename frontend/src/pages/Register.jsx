import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { URL } from "../url";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const res = await axios.post(URL + "/api/auth/register", {
        username,
        email,
        password,
      });
      // console.log(res.data);
      // Update state with response data
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/login");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <form className="max-w-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-400 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-400 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-400 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          onClick={handleRegister}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </form>
      {error && <h3 className="text-red-500 text-sm">Something went wrong!</h3> }
      <p className="mt-4 text-gray-700">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
