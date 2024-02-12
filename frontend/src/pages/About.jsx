import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="text-lg mb-4">
        <p>
          MyWebsite is a platform built using the MERN stack, which stands for MongoDB, Express.js, React, and Node.js.
        </p>
        <p>
          Our mission is to provide a user-friendly platform for sharing and discovering information. We strive to create a community where users can connect, collaborate, and learn from each other.
        </p>
      </div>
      <p className="text-gray-600">Thank you for being a part of MyWebsite!</p>

      {/* Buttons to navigate to Home and Contact page */}
      <div className="mt-8">
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-4 rounded">Go to Home</Link>
        <Link to="/contact" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Go to Contact</Link>
      </div>
    </div>
  );
};

export default About;
