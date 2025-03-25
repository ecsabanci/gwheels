'use client';

import { useState } from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import Image from 'next/image';

export interface SlideItem {
    id: number;
    title: string;
    image: string;
    link?: string;
    description?: string;
}

interface SliderProps {
    items: SlideItem[];
    title?: string;
    showDots?: boolean;
    showArrows?: boolean;
    showTitle?: boolean;
    className?: string;
}

export function Slider({
    items,
    title,
    showDots = true,
    showArrows = true,
    showTitle = true,
    className = ""
}: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const ContentWrapper = items[currentIndex].link ? 'a' : 'div';
    const wrapperProps = items[currentIndex].link
        ? {
            href: items[currentIndex].link,
            rel: "noopener noreferrer",
        }
        : {};

    return (
        <div className={`relative w-full ${className}`}>
            {title && (
                <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    {title}
                </h2>
            )}

            <div className={`relative overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700 w-full h-[400px]`}>
                <ContentWrapper
                    {...wrapperProps}
                    className="relative w-full h-full block"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={items[currentIndex].image}
                            alt={items[currentIndex].title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading="lazy"
                            className="object-cover"
                        />
                    </div>
                </ContentWrapper>

                {showArrows && items.length > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        >
                            <IoChevronBack className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        >
                            <IoChevronForward className="w-6 h-6" />
                        </button>
                    </>
                )}

                {showTitle && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                        <p className="text-sm font-medium">{items[currentIndex].title}</p>
                        {items[currentIndex].description && (
                            <p className="text-xs mt-1 text-gray-200">{items[currentIndex].description}</p>
                        )}
                    </div>
                )}
            </div>

            {showDots && items.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex
                                ? 'bg-emerald-600'
                                : 'bg-gray-300 dark:bg-gray-600'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
} 