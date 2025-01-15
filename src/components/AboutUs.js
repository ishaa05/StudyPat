import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const features = [
    {
      name: "Posture Detector",
      description:
        "Analyze your sitting posture and provide real-time corrections to ensure you maintain a healthy posture during study sessions.",
      image: "https://cdn-icons-png.flaticon.com/512/3048/3048374.png", 
    },
    {
      name: "Study Recommendation",
      description:
        "Get personalized study plans based on your learning style, performance, and goals to maximize productivity.",
      image: "https://cdn-icons-png.flaticon.com/512/5526/5526457.png", 
    },
    {
      name: "Writing Assistant",
      description:
        "Enhance your writing skills with AI-powered suggestions, grammar checks, and style enhancements.",
      image: "https://cdn-icons-png.flaticon.com/256/13298/13298257.png", 
    },
  ];

  return (
    <div className="h-screen bg-gray-100">
      
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">StudyPat</h1>
          <div>
            <Link
              to="/"
              className="px-4 py-2 bg-blue-700 rounded-md hover:bg-blue-800 transition"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="px-4 py-2 ml-4 bg-blue-700 rounded-md hover:bg-blue-800 transition"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      
      <div className="container mx-auto mt-10 p-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          About Us: Empowering Your Study Experience
        </h2>
        <p className="text-center text-lg mb-10">
          At StudyPat, we aim to revolutionize the way you study with cutting-edge tools
          and features tailored to your success.
        </p>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={feature.image}
                alt={feature.name}
                className="w-40 h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">
                {feature.name}
              </h3>
              <p className="text-center text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
