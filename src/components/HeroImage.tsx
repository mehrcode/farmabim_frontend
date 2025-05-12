import React from "react";
import Image from "next/image";

interface HeroImageProps {
    imageUrl: string;
    altText: string;
}

const HeroImage: React.FC<HeroImageProps> =({ imageUrl, altText }) => (
    <div className="w-full max-w-[1200px] min-h-[500px] mx-auto h-96 overflow-hidden">
        <Image src={imageUrl} alt={altText} layout="responsive"
        width={1200} height={800} objectFit="cover" />
    </div>
);

export default HeroImage;