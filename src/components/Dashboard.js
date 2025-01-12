import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="h-screen bg-gray-100">
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">StudyPat Dashboard</h1>
          <div>
            <Link to="/tools" className="px-4 py-2 bg-blue-700 rounded-md hover:bg-blue-800 transition">
              Tools
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome to StudyPat!</h2>
        <p className="text-center text-lg">Here you can access personalized recommendations, tools, and study insights.</p>
      </div>
    </div>
  );
};

export default Dashboard;
