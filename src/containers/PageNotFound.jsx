import { Link } from 'react-router-dom';

const NoPageAvailable = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-700 mt-4">Oops! The page you are looking for doesnot exist.</p>
      <Link to="/" className="mt-6 px-6 py-2 bg-blue text-white rounded-lg hover:bg-blue-700">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NoPageAvailable;
