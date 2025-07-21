import { ArrowBigDownDash, BriefcaseIcon, File, Github, GithubIcon, Linkedin, LucideGithub, Mail } from "lucide-react"
import links from "@/links.json"


export const HomeSection = () => {
    return (
        <section 
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-5">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-light tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi there, </span>
                        <span className="opacity-0 animate-fade-in-delay-1"> my name is</span>
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-10">
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2"> Aabjosh Singh</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium tracking-tight mb-12">
                        <span className="opacity-0 animate-fade-in-delay-3">✦ Glad you're here ✦</span>
                    </h2>
 
                    <p className="text-xl md:xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4 mb-12">
                        I study Mechatronics Engineering at UWaterloo, exploring robotics + automation.

                    </p>

                    <div className="flex justify-center gap-4 pt-2 opacity-0 animate-fade-in-delay-4 text-lg">
                        <a href="#projects" className="cosmic-button">
                            {" "}
                            Take a look at some of my work
                        </a>
                    </div>
                    <div className="flex justify-center gap-2 pt-0 opacity-0 animate-fade-in-delay-4 text-sm">
                        <a href={links.email.address} title="Email" className="flex px-3 py-2 rounded-full bg-background border-4 border-primary/50 card-hover items-center hover:scale-110 hover:border-primary transition-transform duration-300">
                            {" "}
                            {links.email.name}
                        </a>

                        <a href={links.linkedin.address} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="p-2 rounded-full bg-background border-4 border-primary/50 card-hover hover:border-primary hover:scale-110 transition-transform duration-300">
                            <Linkedin className="w-5 h-5"/>
                        </a>

                        <a href={links.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="p-2 rounded-full bg-background border-4 border-primary/50 card-hover hover:scale-110 hover:border-primary transition-transform duration-300">
                            <Github className="w-5 h-5"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-scroll">
                <span className="text-med text-muted-foreground/50 mb-2"> Keep Scrolling </span>
                <ArrowBigDownDash className="h-16 w-10 text-primary text-glow" />
            </div>
        </section>
    )
}
