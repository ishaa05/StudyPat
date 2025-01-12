import React from 'react';
import { Link } from 'react-router-dom';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Dashboard from './Dashboard';
import Tools from './Tools';
const clerkFrontendApi = "pk_test_YXNzdXJlZC1iZWUtMTYuY2xlcmsuYWNjb3VudHMuZGV2JA";
const Home = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-bold text-blue-600">StudyPat</div>
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/Dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
            </li>
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-500">About Us</Link>
            </li>
            <li>
              <Link to="/tools" className="text-gray-700 hover:text-blue-500">Tools</Link>
            </li>
            <li>
            <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            A new way of <span className="text-blue-500">Learning</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Learn the trending courses and boost your career to achieve your goal. 
            Enroll in your interested course and get rewarded after completion.
          </p>
          <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
            Join Now
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-600 mt-4">
            At StudyPat, we aim to provide the best learning resources and a rewarding journey for learners worldwide.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">FAQs</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-blue-500">What is StudyPat?</h3>
              <p className="text-gray-600 mt-2">
                StudyPat is an online learning platform offering top courses and resources to help boost your career.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-500">How do I enroll in a course?</h3>
              <p className="text-gray-600 mt-2">
                Sign up, explore courses, and click on enroll to get started on your journey!
              </p>
            </div>
            {/* Add more FAQs */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
