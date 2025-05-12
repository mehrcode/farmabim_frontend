import React from 'react';

interface ImageGalleryProps {
    images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((src, index) => (
            <img key={index} src={src}
                alt={`Project image ${index + 1}`}
                className="w-full h-auto objectFit='cover' " />
        ))}
    </div>
);

export default ImageGallery;