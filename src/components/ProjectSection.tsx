import Image from "next/image";

interface ProjectSectionProps {
    imageUrl: string;
    description: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ imageUrl, description }) => {
    return (
        <div className="flex flex-col items-start gap-6 gap-y-12 max-w-4xl mx-auto">
            
            <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
                <Image src={imageUrl} alt="Project Image" layout="fill" objectFit="cover" />
            </div>

            <div className="w-full">
                <p className="text-lg text-gray-200 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default ProjectSection;
