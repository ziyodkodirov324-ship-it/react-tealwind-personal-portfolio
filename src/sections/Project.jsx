import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

// ✅ IMG IMPORTS
import ProjectOne from "../assets/img/ProjectOne.jpg";
import ProjectTwo from "../assets/img/ProjectTwo.jpg";
import ProjectThree from "../assets/img/ProjectThree.png";
import ProjectFour from "../assets/img/ProjectFour.jpg";

const projects = [
    {
        title: "Fintech Dashboard",
        description:
            "A comprehensive financial analytics platform with real-time data visualization and advanced reporting features.",
        image: ProjectOne,
        tags: ["React", "TypeScript", "NodeJS"],
        link: "#",
        github: "#",
    },
    {
        title: "E-Commerce Platform",
        description:
            "A modern e-commerce application with seamless checkout, product management, and payment integration.",
        image: ProjectTwo,
        tags: ["React", "TypeScript", "NodeJS"],
        link: "#",
        github: "#",
    },
    {
        title: "Social Media App",
        description:
            "A full-featured social platform with real-time chat, posts, likes, and user interactions.",
        image: ProjectThree,
        tags: ["React", "TypeScript", "NodeJS"],
        link: "#",
        github: "#",
    },
    {
        title: "Portfolio Website",
        description:
            "A sleek and responsive personal portfolio to showcase projects and skills.",
        image: ProjectFour,
        tags: ["React", "TypeScript", "NodeJS"],
        link: "#",
        github: "#",
    },
];

export const Project = () => {
    return (
        <section id="project" className="py-32 relative overflow-hidden">

            {/* BG */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        Featured Work
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
                        Project that
                        <span className="font-serif italic font-normal text-white">
                            {" "}make an impact.
                        </span>
                    </h2>

                    <p className="text-muted-foreground">
                        A selection of my recent work.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden hover:scale-105 transition"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                            </div>

                            {/* Overlay links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a
                                    href={project.link}
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>

                                {/* Github */}
                                {/* <a
                                    href={project.github}
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                    <Github className="w-5 h-5" />
                                </a> */}
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4 ">
                                <div className="flex items-start justify-between">
                                    <h3 className=" text-lg font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight
                                        className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all"
                                    />
                                </div>

                                <p className="text-sm text-muted-foreground mb-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="cursor-pointer px-4 py-1.5 bg-surface rounded-full text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View all CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        View all Project
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};