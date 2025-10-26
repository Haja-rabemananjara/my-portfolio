import { AboutSection } from "../components/AboutSection"
import { HomeSection } from "../components/HomeSection"
import { NavBar } from "../components/Navbar"
import { ProjectSection } from "../components/ProjectSection"
import { ThemeToggle } from "../components/ThemeToggle"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { SkillsSection } from "../components/SkillsSection"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toogle */}
        <ThemeToggle />

        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <main>
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <  Footer />


    </div>
}