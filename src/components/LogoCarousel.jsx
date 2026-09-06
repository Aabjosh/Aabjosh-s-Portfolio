import { useRef, useEffect } from "react";

const logos = [
    { name: "NDI", src: "/work/ndi-logo (1).png" },
    { name: "WATO Humanoid", src: "/work/wato-logo.png" },
    { name: "KidsAbility", src: "/work/butterfly-removebg-preview.png" },
    { name: "Project Astraeus", src: "/work/Project Astraeus Logo CLEAR-03 (1).png" },
    { name: "Edge Engineering Inc.", src: "/work/setting-icon-purple-gear-icon-for-settings-or-tools-6XzXXtLQ_t-removebg-preview.png" },
    { name: "FIRST Robotics Team 2702", src: "/work/Untitled drawing.png" },
    { name: "UWaterloo Engineering Outreach", src: "/work/University_of_Waterloo_seal.png" },
];

// Duplicate so the loop is seamless
const loopedLogos = [...logos, ...logos];

export const LogoCarousel = () => {
    const scrollRef = useRef(null);
    const positionRef = useRef(0);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let animationFrameId;
        const speed = 0.8; // pixels per frame

        const step = () => {
            positionRef.current += speed;

            const singleSetWidth = el.scrollWidth / 2;
            if (positionRef.current >= singleSetWidth) {
                positionRef.current -= singleSetWidth;
            }

            el.scrollLeft = positionRef.current;
            animationFrameId = requestAnimationFrame(step);
        };

        animationFrameId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div
            ref={scrollRef}
            className="flex gap-12 overflow-x-hidden w-full max-w-xl mx-auto py-2 opacity-0 animate-fade-in-delay-4"
        >
            {loopedLogos.map((logo, index) => (
                <img
                    key={`${logo.name}-${index}`}
                    src={logo.src}
                    alt={logo.name}
                    className="h-10 md:h-12 w-auto shrink-0 object-contain opacity-80"
                />
            ))}
        </div>
    );
};