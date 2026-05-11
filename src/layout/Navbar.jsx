import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NavLinks = [
    { href: "#about", label: "About" },
    { href: "#project", label: "Project" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonial", label: "Testimonials" },
];

export const Navbar = () => {
    const [isMObileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(Window.scrolly > 50)
        }
        window.addEventListener("scroll", handleScroll)
    }, []);


    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                ${isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'}`}
        >
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    PM <span className="text-primary">.</span>
                </a>


                {/* DeskTop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {NavLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>


                {/* CTA button */}
                <div className="hidden md:block">
                    <Button size="sm">Contact Me</Button>
                </div>

                {/* Mobile Menu button */}
                <button
                    className="md:hidden p-2 text-foreground cursor-pointer "
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMObileMenuOpen ? <X /> : <Menu size={24} />
                    }

                </button>

                {/* Mobile Menu */}
                {isMObileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 mt-2 px-4 animate-fade-in">
                        <div className="glass-strong rounded-2xl p-6 shadow-lg flex flex-col h-[300px]">

                            {NavLinks.map((link, index) => (
                                <a
                                    href={link.href}
                                    key={index}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg text-muted-foreground hover:text-foreground py-2"
                                >
                                    {link.label}
                                </a>
                            ))}

                            <Button onClick={() => setIsMobileMenuOpen(false)} className="mt-auto">
                                Contact Me
                            </Button>
                        </div>
                    </div>
                )}


            </nav>
        </header >
    );
};