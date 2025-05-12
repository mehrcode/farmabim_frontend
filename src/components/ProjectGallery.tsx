import Image from "next/image";


export default function ProjectGallery({ images } : { images: string[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {images.map((src, index) => (
                <div key={index} className="relative w-full h-64">
                    <Image 
                        src={src}
                        alt={`Project image ${index + 1}`}
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
            ))}
        </div>
    );
}