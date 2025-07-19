const skills = [
  // Hardware
  { name: "Arduino", level: 95, category: "⚙️ Hardware" },
  { name: "Raspberry Pi", level: 85, category: "⚙️ Hardware" },
  { name: "Circuit Board Prototyping", level: 85, category: "⚙️ Hardware" },
  { name: "Drivetrain & Mechanical", level: 90, category: "⚙️ Hardware" },

  // CAD Design
  { name: "Fusion 360", level: 90, category: "📐 CAD Design" },
  { name: "Inventor", level: 95, category: "📐 CAD Design" },
  { name: "OnShape", level: 80, category: "📐 CAD Design" },
  { name: "SOLIDWORKS", level: 95, category: "📐 CAD Design" },

  // Production
  { name: "3D Printing", level: 95, category: "🛠️ Production" },
  { name: "Lathe + Mill", level: 85, category: "🛠️ Production" },
  { name: "Rapid Prototyping", level: 85, category: "🛠️ Production" },
  { name: "Soldering", level: 90, category: "🛠️ Production" },

  // Software & Programming
  { name: "C/C++", level: 85, category: "💻 Software" },
  { name: "Python", level: 90, category: "💻 Software" },
  { name: "Java", level: 90, category: "💻 Software" },
  { name: "JavaScript", level: 70, category: "💻 Software" },
  { name: "MicroPython", level: 85, category: "💻 Software" },
  { name: "React", level: 70, category: "💻 Software" },
  { name: "Tailwind CSS", level: 70, category: "💻 Software" },
  { name: "OpenCV", level: 80, category: "💻 Software" },
  { name: "PyTorch", level: 75, category: "💻 Software" },
  { name: "PID Control", level: 75, category: "💻 Software" },
  { name: "WPILib", level: 85, category: "💻 Software" },

  // Tools & DevOps
  { name: "Git", level: 80, category: "🧰 Tools" },
  { name: "Vercel", level: 80, category: "🧰 Tools" },
  { name: "Vite", level: 70, category: "🧰 Tools" }
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
                                    <div key={key} className="bg-card/75 p-6 rounded-xl shadow-xs card-hover flex flex-col justify-center backdrop-blur-xs">
                                        <div className="mb-4">
                                            <h4 className="font-bold text-lg">{skill.name}</h4>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 bg-secondary/50 h-2 rounded-xl overflow-hidden">
                                                <div 
                                                    className="bg-primary h-2 rounded-xl origin-left animate-[grow_1.5s_ease-out]"
                                                    style={{ width: skill.level + "%"}}
                                                />
                                            </div>
                                            <span className="text-xs italic text-muted-foreground">{skill.level}%</span>
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