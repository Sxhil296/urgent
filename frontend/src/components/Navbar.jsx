import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = false; // Example: Set to true if the user is logged in
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Left side */}
      <div className="flex items-center">
        {/* Logo and name */}
        <span className="font-semibold text-lg">MyWebsite</span>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Navigation links */}
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>

        {/* Render contact link only if user is logged in */}
        {user && <Link to="/contact" className="hover:text-gray-300">Contact</Link>}

        {/* Render login/logout and register links */}
        {user ? <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Log Out</Link> : <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Log In</Link>}
        {!user && <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Register</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
