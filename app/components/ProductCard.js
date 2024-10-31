import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ProductCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = product.images || [];

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative flex-shrink-0 m-6 overflow-hidden bg-gray-800 rounded-lg max-w-xs shadow-lg transition-shadow duration-300 ease-in-out transform hover:shadow-2xl cursor-pointer">
            {/* SVG Background */}
            <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
            </svg>
            <div className="relative pt-4 px-4 flex items-center justify-center">
                <div className="relative w-48 h-48 overflow-hidden">
                    {images.length > 0 && (
                        <Image
                            className="object-contain"
                            src={images[currentImageIndex]}
                            alt={product.name}
                            layout="fill"
                            objectFit="contain"
                        />
                    )}
                </div>
                {images.length > 1 && (
                    <>
                        <button 
                            onClick={handlePrev} 
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full border border-gray-600 shadow hover:bg-gray-600 transition duration-200"
                        >
                            ←
                        </button>
                        <button 
                            onClick={handleNext} 
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full border border-gray-600 shadow hover:bg-gray-600 transition duration-200"
                        >
                            →
                        </button>
                    </>
                )}
            </div>
            <div className="relative text-white px-4 pb-4 mt-4">
                <span className="block opacity-75 -mb-1">{product.category || "Categoría"}</span>
                <div className="flex flex-col">
                    <span className="block font-semibold text-sm leading-tight" title={product.name || "Título por defecto"}>
                        {product.name || "Título por defecto"}
                    </span>
                    <span className="inline-flex justify-center items-center bg-white rounded-full text-gray-800 text-xs font-bold px-1 py-0.5 mt-1">$ 
                        {product.price || "$0.00"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
