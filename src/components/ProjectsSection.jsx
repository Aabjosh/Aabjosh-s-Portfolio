import { Book, BookAIcon, BookOpen } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Autobat",
        description: "A microcontroller-powered T-ball batting system designed for children at KidsAbility with motor impairments, enabling accessible and independent play through the push of a button.",
        image: "/projects/Screenshot 2025-07-18 201247.png",
        tags: ["Arduino", "C / C++", "SOLIDWORKS", "Dot Solder Board"],
        projectLink: "https://github.com/Aabjosh/KidsAbility-Autobat/blob/main/README.md",
    },
    {
        id: 2,
        title: "StrobeShield",
        description: "An award-winning hackathon project glasses that use flickering light-triggered photoresistors to polarize their lenses and prevent photo epilepsy seizures, with real-time event logging.",
        image: "/projects/Screenshot 2025-07-18 201301.png",
        tags: ["Raspberry Pi", "MicroPython", "SOLIDWORKS"],
        projectLink: "https://github.com/Aabjosh/StrobeShield/blob/main/README.md",
    },
    {
        id: 3,
        title: "Shape Detector Convolutional Neural Network",
        description: "A personal project using deep learning with PyTorch + OpenCV to detect circles, squares, and triangles, featuring a GUI to choose training parameters.",
        image: "/projects/Screenshot 2025-07-18 210622.png",
        tags: ["Python", "PyTorch", "OpenCV", "Tkinter", "Machine Learning"],
        projectLink: "https://github.com/Aabjosh/Shape-Detector-CNN/blob/main/README.md",
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="scroll-mt-24 py=24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary"> Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-bold">
                Take a look at some of my work in creating full systems, and some software!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card/70 rounded-4xl overflow-hidden shadow-xs card-hover backdrop-blur-xs border-2">
                        <div className="h-64 overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" 
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full border-2 bg-primary/30 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-l font-bold mb-1 px-4">{project.title}</h3>
                        <p className="text-muted-foreground mb-4 px-4">{project.description}</p>
                        <div className="flex justify-center items-center p-4">
                            <div className="flex justify-center">
                                <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-foreground transition-colors duration-300 flex items-center gap-2"> 
                                    <BookOpen size={20}/> <span className="text-sm underline">Read More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}