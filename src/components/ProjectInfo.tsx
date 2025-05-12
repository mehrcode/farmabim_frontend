import React from "react";
import { FaMapMarkerAlt, FaUserTie, FaRulerCombined, FaIndustry } from "react-icons/fa";


interface ProjectInfoProps {
    title: string;
    location: string;
    year: string;
    architect: string;
    area: number;
    manufacturers: string[];
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
    title, location, year, architect, area, manufacturers,
}) => (
    <div className="max-w-4xl mx-auto px-4 py-2 space-y-4">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>

        <div className="flex items-center space-x-2 text-lg ">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>{location} • {year}</span>
        </div>

        <div className="flex items-center space-x-2 text-sm ">
            <FaUserTie className="text-green-500" />
            <span>Architect: {architect}</span>
        </div>

        <div className="flex items-center space-x-2 text-sm ">
            <FaRulerCombined className="text-red-500" />
            <span>Area: {area} m²</span>
        </div>

        <div className="flex items-center space-x-2 text-sm ">
            <FaIndustry className="text-yellow-500" />
            <span>Manufacturers: {manufacturers.join('، ')}</span>
        </div>
    </div>
);

export default ProjectInfo;