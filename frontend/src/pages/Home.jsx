const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to MyWebsite</h1>
      <div className="text-lg mb-4">
        <p>
          MyWebsite is a platform built using the MERN stack, which stands for MongoDB, Express.js, React, and Node.js.
        </p>
        <p>
          The MERN stack is a popular technology stack for building modern web applications. MongoDB is a NoSQL database, Express.js is a backend web framework for Node.js, React is a frontend library for building user interfaces, and Node.js is a JavaScript runtime for server-side development.
        </p>
      </div>
      <p className="text-gray-600">Start exploring our platform to learn more about what we offer!</p>
    </div>
  );
};

export default Home;
