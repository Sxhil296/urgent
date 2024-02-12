import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle registration logic here, e.g., sending the data to your backend to create a new user account
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="px-4 py-2 rounded-lg border border-gray-400 w-full focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="px-4 py-2 rounded-lg border border-gray-400 w-full focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="px-4 py-2 rounded-lg border border-gray-400 w-full focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Register</button>
      </form>
      <p className="mt-4 text-gray-700">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
    </div>
  );
};

export default Register;