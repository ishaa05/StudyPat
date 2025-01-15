import React from "react";
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend, LineElement, PointElement } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

const Dashboard = () => {
  const durationData = {
    labels: ["Posture Detector", "Study Recommendation", "Writing Assistant"],
    datasets: [
      {
        label: "Time Spent (hrs)",
        data: [10, 15, 5],
        backgroundColor: ["#4caf50", "#2196f3", "#ff9800"],
        borderColor: "#ffffff",
        borderWidth: 1,
      },
    ],
  };

  const featuresUsedData = {
    labels: ["Posture Detector", "Study Recommendation", "Writing Assistant"],
    datasets: [
      {
        label: "Features Used (%)",
        data: [40, 35, 25],
        backgroundColor: ["#f44336", "#9c27b0", "#03a9f4"],
        borderWidth: 1,
      },
    ],
  };

  const postureCorrectionData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Posture Corrections",
        data: [5, 7, 3, 8, 6, 4, 9],
        fill: false,
        backgroundColor: "#00bcd4",
        borderColor: "#00bcd4",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="h-screen bg-gray-100">
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">StudyPat Dashboard</h1>
          <div>
            <Link
              to="/tools"
              className="px-4 py-2 bg-blue-700 rounded-md hover:bg-blue-800 transition"
            >
              Tools
            </Link>
            <Link
                          to="/"
                          className="px-4 py-2 bg-blue-700 rounded-md hover:bg-blue-800 transition ml-4"
                        >
                          Home
                        </Link>
          </div>
          
        </div>
        
      </nav>
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome to StudyPat!</h2>
        <p className="text-center text-lg mb-10">
          Here you can access personalized recommendations, tools, and study insights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Time Spent(per week)</h3>
            <Bar data={durationData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Feature Usage (%)</h3>
            <Pie data={featuresUsedData} options={{ responsive: true, plugins: { legend: { position: "bottom" } } }} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Posture Corrections</h3>
            <Line data={postureCorrectionData} options={{ responsive: true, plugins: { legend: { position: "bottom" } } }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
