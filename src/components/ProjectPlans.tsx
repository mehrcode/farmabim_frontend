import React from 'react';

interface ProjectPlansProps {
  plans: string[];
}

const ProjectPlans: React.FC<ProjectPlansProps> = ({ plans }) => (
  <div className="max-w-6xl mx-auto px-4 py-8">
    <h2 className="text-2xl font-bold mb-4">Plans</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {plans.map((src, index) => (
        <img key={index} src={src} alt={`Plan ${index + 1}`} className="w-full h-auto object-cover" />
      ))}
    </div>
  </div>
);

export default ProjectPlans;