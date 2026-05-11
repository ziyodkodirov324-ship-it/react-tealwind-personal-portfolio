// import { Linkedin, Twitter, Heart } from "lucide-react";
import Gitcon from '../assets/icon/GithubIcon.png'
import Linkedin from '../assets/icon/Linkedin.png'
import Twitter from '../assets/icon/Twitter.png'
import { Heart } from "lucide-react";

const socialLinks = [
    {
        icon: Gitcon,
        href: "https://github.com/",
        label: "GitHub",
    },
    {
        icon: Linkedin,
        href: "https://linkedin.com/",
        label: "LinkedIn",
    },
    {
        icon: Twitter,
        href: "https://twitter.com/",
        label: "Twitter",
    },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a
                            href="#"
                            className="text-2xl font-bold tracking-tight text-white"
                        >
                            DevPortfolio
                        </a>

                        <p className="mt-3 text-sm text-gray-400 flex items-center gap-1 justify-center md:justify-start">
                            © {currentYear} Made with
                            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                            by You
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" p-3 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <icon size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};