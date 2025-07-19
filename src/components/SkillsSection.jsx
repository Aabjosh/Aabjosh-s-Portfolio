const skills = [
  // Hardware
  { name: "Arduino", level: "Fluent", category: "⚙️ Hardware" },
  { name: "Drivetrain & Mechanical", level: "Fluent", category: "⚙️ Hardware" },
  { name: "Raspberry Pi", level: "Proficient", category: "⚙️ Hardware" },
  { name: "Circuit Board Prototyping", level: "Proficient", category: "⚙️ Hardware" },

  // CAD Design
  { name: "Fusion 360", level: "Fluent", category: "📐 CAD Design" },
  { name: "Inventor", level: "Fluent", category: "📐 CAD Design" },
  { name: "SOLIDWORKS", level: "Fluent", category: "📐 CAD Design" },
  { name: "OnShape", level: "Capable", category: "📐 CAD Design" },

  // Production
  { name: "3D Printing", level: "Fluent", category: "🛠️ Production" },
  { name: "Soldering", level: "Fluent", category: "🛠️ Production" },
  { name: "Lathe + Mill", level: "Proficient", category: "🛠️ Production" },
  { name: "Rapid Prototyping", level: "Proficient", category: "🛠️ Production" },

  // Software & Programming
  { name: "Python", level: "Fluent", category: "💻 Software" },
  { name: "Java", level: "Fluent", category: "💻 Software" },
  { name: "MicroPython", level: "Proficient", category: "💻 Software" },
  { name: "C/C++", level: "Capable", category: "💻 Software" },
  { name: "OpenCV", level: "Capable", category: "💻 Software" },
  { name: "JavaScript", level: "Familiar", category: "💻 Software" },
  { name: "React", level: "Familiar", category: "💻 Software" },
  { name: "Tailwind CSS", level: "Familiar", category: "💻 Software" },
  { name: "PyTorch", level: "Familiar", category: "💻 Software" },
  { name: "PID Control", level: "Familiar", category: "💻 Software" },

  // Tools & DevOps
  { name: "WPIlib", level: "Proficient", category: "🧰 Tools" },
  { name: "Git", level: "Capable", category: "🧰 Tools" },
  { name: "Vercel", level: "Capable", category: "🧰 Tools" },
]

export const SkillsSection = () => {
    // Group skills by category
    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary text-glow">Skills</span>
                </h2>

                <p className="font-semibold text-center text-medium mb-20 text-foreground/85">
                    Here are some scales of my familiarity.
                </p>

                <div className="space-y-12">
                    {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                        <div key={category} className="space-y-6">
                            <h3 className="text-2xl font-bold text-center text-foreground">
                                {category}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {categorySkills.map((skill, key) => (
                                    <div key={key} className="bg-card/65 p-6 rounded-xl shadow-xs card-hover flex flex-col justify-center backdrop-blur-xs">
                                        <div className="mb-4">
                                            <h4 className="font-bold text-lg">{skill.name}</h4>
                                        </div>
                                        <div className="text-sm flex items-center gap-2 justify-center">
                                            <span className="text-foreground">Level: </span>
                                            <span className="text-primary font-bold animate-pulse-slow">{skill.level}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// export const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredSkills = skills.filter(
//     (skill) => activeCategory === "all" || skill.category === activeCategory
//   );
//   return (
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           My <span className="text-primary"> Skills</span>
//         </h2>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category, key) => (
//             <button
//               key={key}
//               onClick={() => setActiveCategory(category)}
//               className={cn(
//                 "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
//                 activeCategory === category
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-secondary/70 text-forefround hover:bd-secondary"
//               )}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSkills.map((skill, key) => (
//             <div
//               key={key}
//               className="bg-card p-6 rounded-lg shadow-xs card-hover"
//             >
//               <div className="text-left mb-4">
//                 <h3 className="font-semibold text-lg"> {skill.name}</h3>
//               </div>
//               <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
//                 <div
//                   className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
//                   style={{ width: skill.level + "%" }}
//                 />
//               </div>

//               <div className="text-right mt-1">
//                 <span className="text-sm text-muted-foreground">
//                   {skill.level}%
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };