import { AboutSection } from "../components/AboutSection.jsx";
import { HomeSection } from "../components/HomeSection.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { ThemeToggle } from "../components/ThemeToggle.jsx";
import { StarBackground } from "@/components/StarBackground"
import '@fontsource/poppins';
import { SkillsSection } from "../components/SkillsSection.jsx";
import { ExperienceSection } from "../components/ExperienceSection.jsx";
import { ProjectsSection } from "../components/ProjectsSection.jsx";
import { ContactSection } from "../components/ContactSection.jsx";
import { Footer } from "../components/Footer.jsx";


export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* THEME TOGGLE */}
            <ThemeToggle />

            {/* BACKGROUND */}
            <StarBackground>

            </StarBackground>
            {/* NAVBAR */}
            <Navbar>
                
            </Navbar>
            {/* MAIN CONTENT */}
            <main>
                <HomeSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ExperienceSection />
                <ContactSection />
            </main>
            {/* FOOTER */}
            <Footer />
        </div>
    );
};