import { Code2Icon, Handshake, Settings } from "lucide-react"
import links from "@/links.json"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="flex justify-center">
                        <img src="/1764649157771.jpg" alt="Me" className="flex w-40 h-40 rounded-full shadow-md shadow-foreground" />
                    </div>
                    <p className="texst-muted-foreground">
                        Since 2021, I’ve been involved with autonomous robotics 
                        and accessible medical tech, leading teams in design and prototyping.
                    </p>

                    <p className="texst-muted-foreground">
                        Currently, you'll find me working in the MedTech industry building systems for surgical navigation, or working on humanoid robotics during my downtime.
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
                                    Making devices, apps and systems that improve daily life with integrated hardware, software, and actuators.
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
                                    Working on target detection in OpenCV, machine learning with PyTorch, firmware and SLAM tasks for a humanoid at <a href={"https://watonomous.github.io/humanoid-docs/index.html"} target="_blank" rel="noopener noreferrer" className="font-bold underline">WATonomous</a> and biosensing wearables for <a href="https://www.kidsability.ca/" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground underline">KidsAbility.</a>
                                </p>
                                <a href={links.github} target="_blank" rel="noopener noreferrer" className="font-bold text-foreground underline">Check out my GitHub!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
