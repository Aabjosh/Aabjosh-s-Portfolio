import { ArrowBigDownDash, Github, GithubIcon, Linkedin, LucideGithub, Mail } from "lucide-react"


export const HomeSection = () => {
    return (
        <section 
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-5">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-light tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hey there, </span>
                        <span className="opacity-0 animate-fade-in-delay-1"> my name is</span>
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-10">
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2"> Aabjosh Singh</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium tracking-tight">
                        <span className="opacity-0 animate-fade-in-delay-3">✦ Glad you're here ✦</span>
                    </h2>
 
                    <p className="text-lg md:xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        I’m studying Mechatronics Engineering at UWaterloo, exploring the frontiers of robotics and automation. I develop real solutions using electromechanical systems and programming.

                    </p>

                    <div className="flex justify-center gap-4 pt-2 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            {" "}
                            Take a look at some of my work
                        </a>
                    </div>
                    <div className="flex justify-center gap-4 pt-0 opacity-0 animate-fade-in-delay-4">
                        <a href="mailto:aabjosh0singh@gmail.com" className="p-3 rounded-full bg-primary/60 card-hover hover:scale-110 transition-transform duration-300">
                            {" "}
                            <Mail />
                        </a>

                        <a href="https://linkedin.com/in/aabjosh" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/60 card-hover hover:scale-110 transition-transform duration-300">
                            <Linkedin />
                        </a>

                        <a href="https://github.com/Aabjosh" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/60 card-hover hover:scale-110 transition-transform duration-300">
                            <Github />
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-scroll">
                <span className="text-med text-muted-foreground/50 mb-2"> Keep Scrolling </span>
                <ArrowBigDownDash className="h-8 w-5 text-primary" />
            </div>
        </section>
    )
}