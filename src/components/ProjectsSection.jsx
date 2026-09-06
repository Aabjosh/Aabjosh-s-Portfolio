import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/projectsData";

// SCROLLING MODS ARE THANKS TO CLAUDE!

// Duplicate the list so the scroll can loop seamlessly
const loopedProjects = [...projects, ...projects];

export const ProjectsSection = () => {
    const scrollRef = useRef(null);
    const positionRef = useRef(0);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let animationFrameId;
        const speed = 0.2; // now safe to use any value, even tiny ones

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

    return <section id="projects" className="scroll-mt-24 py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Projects
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
                Here's a synopsis of some of my full systems and software! (Hover to pause)
            </p>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-hidden pb-4"
            >
                {loopedProjects.map((project, index) => (
                    <div
                        key={`${project.id}-${index}`}
                        className="shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] group bg-card/70 rounded-4xl overflow-hidden shadow-xs card-hover backdrop-blur-xs border-2"
                    >
                        <div className="h-88 overflow-hidden mb-4">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-l font-bold mb-1 px-4">{project.title}</h3>
                        <p className="text-muted-foreground mb-4 px-4">{project.description_simple}</p>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-2 py-1 text-xs font-medium rounded-full border-2 bg-primary/50 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8 mb-8">
                <Link 
                    to="/projects" 
                    className="flex items-center gap-2 px-5 py-2 rounded-xl bg-primary/50 card-hover hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-transform duration-300 font-medium"
                >
                    View All Projects <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    </section>
}