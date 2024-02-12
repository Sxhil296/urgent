import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        URL + "/api/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      // console.log(res.data);
      setUser(res.data);
      navigate("/");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form className="max-w-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
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
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-400 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
      {error && <h3 className="text-red-500 text-sm">Something went wrong!</h3>}
      <p className="mt-4 text-gray-700">
        New here?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
