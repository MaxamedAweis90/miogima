"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
    {
        src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=1400&q=80",
        alt: "Women at a local market",
    },
    {
        src: "https://images.unsplash.com/photo-1543168266-784f7b6b6d8b?auto=format&fit=crop&w=1400&q=80",
        alt: "Community development field work",
    },
    {
        src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80",
        alt: "Team collaboration on a project",
    },
];

export default function HeroCarousel() {
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveImage((current) => (current + 1) % heroImages.length);
        }, 4500);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0">
            {heroImages.map((image, index) => (
                <div
                    key={image.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === activeImage ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority={index === 0}
                        unoptimized
                        className="object-cover object-center"
                    />
                </div>
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,32,51,0.92)_0%,rgba(16,32,51,0.76)_42%,rgba(16,32,51,0.38)_72%,rgba(16,32,51,0.46)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.26),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.18),transparent_28%)]" />
        </div>
    );
}
