'use client'
import { use } from "react";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import HeroImage from "@/components/HeroImage";
import ProjectInfo from "@/components/ProjectInfo";
// import ProjectDescription from "@/components/ProjectDescription";
import ImageGallery from "@/components/ImageGallery";
import ProjectPlans from "@/components/ProjectPlans";
import ProjectSection from "@/components/ProjectSection";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}


export default function ProjectPage({ params }: ProjectPageProps) {
    const resolvedParams = use(params);
    const project = projects.find((project) => project.slug === resolvedParams.slug);

    if (!project) return notFound();

    return (
        <div className="container mx-auto px-4 py-10 space-y-2">
            {/* hiro image */}
            <div className="w-full h-[300px] rounded-lg overflow-hidden">
                <HeroImage imageUrl={project.heroImage} altText={project.title} />
            </div>

            {/* infos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b pb-8">
                <ProjectInfo
                    title={project.title}
                    location={project.location}
                    year={project.year}
                    architect={project.architect}
                    area={project.area}
                    manufacturers={project.manufacturers}
                />
            </div>

            <div className="space-y-12">
                {project.images.map((image, index) => (
                    <ProjectSection key={index} imageUrl={image} description={project.descriptions[index]} />

                ))}
            </div>

            {/* description */}
            {/* <div className="text-lg text-gray-700 leading-relaxed">
                <ProjectDescription description={project.description} />
            </div> */}

            {/* image gallery*/}
            <div>
                <ImageGallery images={project.images} />
            </div>

            {/* plans */}
            <div className="mt-10">
                <ProjectPlans plans={project.plans} />
            </div>
        </div>
    )

}





