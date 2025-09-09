import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import links from '@/links.json'

const navItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
	{name: "Projects", href: "#projects"},
    {name: "Skills", href: "#skills"},
    {name: "Experience", href: "#experience"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <nav className={cn(
			"fixed w-full z-40 transition-all duration-300",
			isScrolled ? "py-3 bg-background shadow-xs" : "py-5"
		)}
        >

            <div className="container flex items-center justify-center font-medium">
                
                {/* DESKTOP */}
                <div className="hidden md:flex space-x-16 items-center">
                    <a href={links.cv} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-xl bg-primary/50 card-hover hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-transform duration-300">
                        <span className="font-medium">My Resume</span>
                    </a>
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* MOBILE */}

                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)} 
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                    {/* Blurred overlay with nav */}
                <div
					className={cn(
						"fixed inset-0 bg-background/20 backdrop-blur-xl z-40 flex flex-col items-center justify-center",
						"transition-all duration-300 md:hidden",
						isMenuOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
					)}
					>
					<div className="flex flex-col space-y-8 text-xl">
                        <a href={links.cv} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-xl bg-primary/50 card-hover hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-transform duration-300">
                            <span className="font-medium">My Resume</span>
                        </a>
						{navItems.map((item, key) => (
						<a
							key={key}
							href={item.href}
							className="text-foreground/80 hover:text-primary transition-colors duration-300"
							onClick={() => setIsMenuOpen(false)}
						>
							{item.name}
						</a>
						))}
					</div>
				</div>
            </div>
        </nav>
    );
};
