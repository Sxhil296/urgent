import axios from 'axios';
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to backend
      const response = await axios.post('/api/form/submit', formData);

      // Log response from backend (optional)
      console.log(response.data);

      // Reset form fields after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Optionally, display a success message to the user
      alert('Form submitted successfully!');
    } catch (error) {
      // Handle errors from backend
      console.error('Error submitting form:', error);
      // Optionally, display an error message to the user
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
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
          <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="px-4 py-2 rounded-lg border border-gray-400 w-full focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="px-4 py-2 rounded-lg border border-gray-400 w-full focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
