import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

import ProjectOne from "../assets/img/work1.jpg";
import ProjectTwo from "../assets/img/work2.jpg";
import ProjectThree from "../assets/img/garage.png";
import ProjectFour from "../assets/img/project.png";

const projects = [
    {
        title: "Stroy Wholesale Auction",
        description: "It's my first work that I work with a group. These projact gave us from the our training center and if we did it they will give us our diploma.So they gave us the tasks, everyone had their work. My tasks were make a Registor, Making an order, Authorizations and Privacy Policy pages...",
        image: ProjectOne,
        tags: ["React", "TypeScript", "Figma"],
        link: "#",
        github: "#",
    },
    {
        title: "Alowishus Delicious Coffee",
        description: "This work I did in my first days in my work. This projact give my mentor at work. I finished it around 2-3 weeks. I know it's very late but for my mistakes I did it very late. Many things had come to mind because I had not been involved in this business for a long time, fro these reason I can't did it very fast.",
        image: ProjectTwo,
        tags: ["React", "TypeScript", "Figma"],
        link: "#",
        github: "#",
    },
    {
        title: "Social Media App",
        description:
            "It's my first of projact that I did in my frist time in Frontent Course. This project my favourite projact, I know it;s very simple and easy project but for me this project better that others that I did!.",
        image: ProjectThree,
        tags: ["React", "TypeScript", "NodeJS"],
        link: "#",
        github: "#",
    },
    {
        title: "Portfolio Website",
        description:
            "This project, Now I doing, If you look it, this projact finished.",
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