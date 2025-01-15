import React from 'react';

const Tools = () => {
  const tools = [
    { name: 'Posture Detector', description: 'Detect and correct your posture.', link: '/detect' },
    { name: 'Writing Assistant', description: 'Grammar, tone, and writing suggestions.', link: 'http://localhost:8502/' },
    { name: 'Study Material Recommendation', description: 'Personalized study content.', link: 'http://localhost:8501/' },
  ];

  const handleRedirect = (link) => {
    window.location.href = link; 
  };

  return (
    <div className="h-screen bg-gray-100">
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">StudyPat Tools</h1>
        </div>
      </nav>
      <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
            onClick={() => handleRedirect(tool.link)}
          >
            <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
            <p className="text-gray-700">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
