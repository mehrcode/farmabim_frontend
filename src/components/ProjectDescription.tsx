import React from "react";

interface ProjectDescriptionProps {
    description: string;
} 

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ description }) => (
    <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-base text-gray-200 leading-relaxed">{description}</p>
    </div>
);

export default ProjectDescription;