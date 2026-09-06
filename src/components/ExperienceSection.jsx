import links from "@/links.json"

const education = [
    {
        name: "University of Waterloo",
        timeframe: "2025-2030",
        subject: "Honours Mechatronics Engineering, Co-op (BASc)",
        stats: ["Excellent Standing", "President’s Scholarship", "Kothari Family FIRST Alumni Entrance Scholarship"],
    },
    {
        name: "Cameron Heights Collegiate Institute",
        timeframe: "2021-2025",
        subject: "Ontario Secondary School Education Under the IB Full Diploma Programme",
        stats: ["4.0 GPA", "2025 KW Record All-Round Graduate Award", "OSSD", "IBDP"],
    },
]

const work = [
    {
        id: 0,
        name: "NDI (Northern Digital Inc.)",
        timeframe: "2026",
        position: "Firmware Developer Intern",
        picture: "/work/ndi-logo (1).png",
        external: "https://www.ndigital.com/",
        description: "I'm working on the Linux stack for optical surgical navigation systems used by OEMs, hospitals and researchers worldwide. I'm looking forward to using protocols, developing algorithms and researching how to improve navigation."
    },
    {
        id: 0,
        name: "WATO Humanoid",
        timeframe: "2026-Present",
        position: "Core Member: FW, Mech and Perception",
        picture: "/work/wato-logo.png",
        external: "https://watonomous.github.io/humanoid-docs/index.html",
        description: "For UWaterloo's humanoid, I've helped lead the setup for a RealSense used to map environments (SLAM), and designed components for the robot's legs and torso. I've been writing firmware for a wearable to train the humanoid through human reinforcement + imitation."
    },
    {
        id: 0,
        name: "NDI (Northern Digital Inc.)",
        timeframe: "2026",
        position: "Software Developer Intern",
        picture: "/work/ndi-logo (1).png",
        external: "https://www.ndigital.com/",
        description: "I built an internal Java Swing GUI tool to calibrate optical surgical navigation systems, which are used by OEMs, hospitals and research institutions worldwide. Leveraging OpenCV, I helped tune the systems, using ring-detection algorithms and modified implementations of target detectors, allowing camera-based alignment across lighting conditions. I also added 3D rendering features to customer applications, and fixed bugs in the team's software. My tasks were documented so my discoveries, changes and suggestions could be referenced by all developers."
    },
    {
        id: 0,
        name: "KidsAbility (Waterloo)",
        timeframe: "2023-Present",
        position: "Assistive Technology Developer",
        picture: "/work/butterfly-removebg-preview.png",
        external: "https://www.kidsability.ca",
        description: "I'm building wired and wireless EMG/EIT switch wearables, actuated systems, and custom PCB-based automation projects using tools like ESP32s, Arduinos, and 3D-printed components. I developed a 10x cost-reduced automated batting arm for adaptive t-ball, which was used at a supportive children's league event, and created soft-touch communication aids for youth facing speech and anxiety challenges. I've impacted 50-100+ neurodivergent and disabled youth through this initiative so far, inspiring the launch of Project Astraeus."
    },
    {
        id: 0,
        name: "Project Astraeus",
        timeframe: "2024-Present",
        position: "Co-Chairman + Founder",
        picture: "/work/Project Astraeus Logo CLEAR-03 (1).png",
        external: "https://projectastraeus.org",
        description: "Empowering young engineers to tackle local challenges across Canada through hands-on innovation. Leading community STEM workshops and developing educational kits to make learning more accessible. Supported by the University of Waterloo’s GreenHouse incubator for social innovation. Raised $8,655 in seed funding after pitching at the Smart Waterloo Region Youth Impact Project competition."
    },
    {
        id: 0,
        name: "Edge Engineering Inc.",
        timeframe: "2022-Present",
        position: "CAD Developer",
        picture: "/work/setting-icon-purple-gear-icon-for-settings-or-tools-6XzXXtLQ_t-removebg-preview.png",
        external: "https://edge-eng.com",
        description: "I designed mechanical systems and products for injection molding and sheet bending using Autodesk Inventor. I also created detailed 3D renderings and technical documents outlining dimensions and construction. I learned to iterate on prototypes to optimize performance and manufacturability, ensuring designs met production and quality standards thorough documentation."
    },
    {
        id: 0,
        name: "FIRST Robotics Team 2702",
        timeframe: "2021-2025",
        position: "Team Lead, Software Developer, Robot Operator",
        picture: "/work/Untitled drawing.png",
        external: "https://2702rebels.com/",
        description: "Developed autonomous game piece detection with OpenCV on Pi 4 and Jetson, achieving 90% accuracy. Led software team building command-based robot code with PIDs and sensor integration. Managed subsystem teams of 10+ designing scoring mechanisms using SOLIDWORKS and machine tools. Named as one of the few 2024 International Dean’s List Finalist by FIRST Robotics for engineering excellence."
    },
    {
        id: 0,
        name: "UWaterloo Engineering Outreach",
        timeframe: "2023-2025",
        position: "High School Outreach Instructor",
        picture: "/work/University_of_Waterloo_seal.png",
        external: "https://uwaterloo.ca/engineering-outreach",
        description: "Led youth across the region as an Outreach Instructor, inspiring creativity and curiosity through engineering challenges and projects. Taught elementary students engineering fundamentals and problem-solving during summer camps as a High School Leader. Volunteered as Leader in Training before transitioning to a contract role. Facilitated engaging, hands-on summer camps that foster inquisitive mindsets."
    },
     
]

export const ExperienceSection = () => {
    return <section id="experience" className="scroll-mt-24 py=24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                My Experience
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-bold">
                Get to know some of my initiatives and extracurricular activities.
            </p>
            
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
                Tap/click on the cards to visit their websites!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                {work.map((exp, key) => (
                    <a href={exp.external} target="_blank" rel="noopener noreferrer">
                        <div key={key} className="group bg-card/65 rounded-4xl overflow-hidden shadow-xs card-hover backdrop-blur-xs border-2 p-5">
                            <div className="flex gap-2 items-center justify-between mb-2">
                                <h3 className="text-xl font-bold p-4 text-left">{exp.name}</h3>
                                <p className="text-muted-foreground text-md px-4 text-right">{exp.timeframe}</p>
                            </div>
                            <h3 className="text-left px-4 text-md font-bold text-primary mb-2">
                                {exp.position}
                            </h3>
                            <p className="p-5 text-sm text-foreground text-left mb-8">
                                {exp.description}
                            </p>
                            <div className="flex justify-center mb-4 rounded-full">
                                <img src={exp.picture} alt={exp.name} className="w-15 h-15 text-center"/>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <h2 className="text-3xl md:text-3xl font-medium mb-8 text-center">Education:</h2>
            <div className="grid grid-cols-1 gap-4 mb-20">
                {education.map((edu, key) => (
                    <div key={key} className="group bg-primary/50 rounded-4xl overflow-hidden shadow-xs card-hover backdrop-blur-xs p-5">
                        <div className="flex gap-2 items-center justify-between mb-2">
                            <h3 className="text-xl font-bold px-4 text-left">{edu.name}</h3>
                            <p className="text-muted-foreground px-4 text-right">{edu.timeframe}</p>
                        </div>
                        <div className="text-left px-4 text-md mb-2">
                            <p>{edu.subject}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 px-4">
                                {edu.stats.map((tag) => (
                                    <span className="px-4 py-2 text-sm font-medium rounded-full border-2 bg-card text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}
