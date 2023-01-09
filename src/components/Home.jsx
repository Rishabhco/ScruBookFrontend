import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex">
      <div className="bg-gray-800 w-1/2 h-screen flex items-center justify-center">
        <h1 className="text-5xl text-white">Welcome to the ScrubBook</h1>
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center">
        <Link to="/trainerlogin" className="bg-gray-300 rounded px-4 py-2 mx-2 hover:bg-gray-800 hover:text-white">
          Trainer
        </Link>
        <Link to="/traineelogin" className="bg-gray-300 rounded px-4 py-2 mx-2 hover:bg-gray-800 hover:text-white">
          Trainee
        </Link>
      </div>
    </div>
  );
};

export default Home;

