import { BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/SimpleNavbar.jsx";
import { ThemeToggle } from "../components/ThemeToggle.jsx";
import { Footer } from "../components/Footer.jsx";
import { projects } from "@/projectsData";
import '@fontsource/poppins';

export const Projects = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <Navbar />
            <main className="pt-32 pb-16 px-4">
                <div className="container mx-auto max-w-5xl">

                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Featured Projects
                    </h1>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-medium text-foreground/80">
                        A closer look at some systems and software I've built. More coming soon!
                    </p>

                    <div className="grid grid-cols-1 gap-4">
                        {projects.map((project) => (
                            <div key={project.id} className="group flex gap-4 p-4 bg-card/50 rounded-3xl overflow-hidden shadow-xs card-hover backdrop-blur-xs border-2">
                                <div className="w-60 md:w-75 flex-shrink-0 rounded-2xl overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" 
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-2xl font-bold mb-4 text-primary">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-1 text-xs font-medium rounded-full border-2 bg-primary/50 text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mb-6">
                                        {project.description.map((para) => (
                                            <p key={para} className="text-muted-foreground mb-2 text-sm text-left">
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                    {project.projectLink !== "NO_LINK" && (
                                        <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-foreground transition-colors duration-300 flex items-center gap-2 justify-center">
                                            <BookOpen size={18}/> <span className="text-sm">Read More</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};