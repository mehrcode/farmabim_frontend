import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

const HomePage = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center mb-8">Farma BIM Projects</h1>

            {/* گرید اول – شامل عکس بزرگ و چند عکس مربع */}
            <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-4 mb-8">
                {projects.slice(0, 6).map((project, index) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className={`group ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                    >
                        <div className="relative aspect-square overflow-hidden">
                            <Image
                                src={project.heroImage}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="mt-2 text-sm font-medium text-left">{project.title}</h2>
                    </Link>
                ))}
            </div>

            {/* گرید دوم – فقط عکس‌های مربع، ۳ ستونه منظم */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.slice(6).map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group"
                    >
                        <div className="relative aspect-square overflow-hidden">
                            <Image
                                src={project.heroImage}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="mt-2 text-sm text-left font-medium">{project.title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
