import { Code2Icon, Handshake, Settings } from "lucide-react"
import links from "@/links.json"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="flex justify-center">
                        <img src="/IMG_6092.jpg" alt="Me" className="flex w-40 h-40 rounded-full shadow-md shadow-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold">
                        Founder and Creator
                    </h3>
                    <p className="texst-muted-foreground">
                        Since 2021, I’ve spearheaded and contributed to cutting‑edge projects—from autonomous robotics 
                        and accessibility tech to youth STEM initiatives, leading major developments in design, prototyping, and impact.
                    </p>

                    <p className="texst-muted-foreground">
                        My goal is to unite creativity and purpose to develop meaningful solutions to pressing issues. I am constantly learning new
                        frameworks, methods of manufacturing, and challenging the scope of my initiatives.
                    </p>

                    <p className="texst-muted-foreground">
                        I also enjoy photography as a hobby! Feel free to check out my <a href={links.unsplash} target="_blank" rel="noopener noreferrer" className="font-bold text-foreground underline">Unsplash</a>
                          . You might catch me out on a run too - I used to compete at a national level in track and field.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Let's Talk
                        </a>

                        <a href={links.cv} target="_blank" rel="noopener noreferrer" className="cosmic-button">
                            {" "}
                            Download my Resume
                        </a>

                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover rounded-4xl">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/50">
                                <Settings className="h-8 w-8"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg text-primary">I'm a Builder</h4>
                                <p className="text-muted-foreground">
                                    Passionate about making usable devices and systems that improve daily life, through integrating hardware, software, and actuators.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover rounded-4xl">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/50">
                                <Code2Icon className="h-8 w-8"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg text-primary">I'm a Developer</h4>
                                <p className="text-muted-foreground mb-4">
                                    Working on vision-related projects, machine learning with PyTorch, control system applications such as WPIlib, 
                                    but also programming in C++ and MicroPy using microcontrollers.
                                </p>
                                <a href={links.github} target="_blank" rel="noopener noreferrer" className="font-bold text-foreground underline">Check out my GitHub!</a>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover rounded-4xl">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/50">
                                <Handshake className="h-8 w-8"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg text-primary">I'm a Founder</h4>
                                <p className="text-muted-foreground">
                                    I have been running school-based engineering initiatives, while also starting an interprovincial organization
                                    for to STEM education, called: <a href="https://projectastraeus.org" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground underline">Project Astraeus.</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
