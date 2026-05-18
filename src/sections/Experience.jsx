const experiences = [
    {
        period: "2020 – 2021/22",
        role: "Backend Developer",
        company: "Robotics Lab.",
        description: "According to my career, I went to the Beckand course such 4-5 years ago. I was 14-15 years old when I wasn't mistaken. I studied in this course for 1-2 years. I also got the Nootbook that I use now. The time I took 70% off this course has always been taken but my studies have also dropped out as the lessons get harder. I don't remember anything at the moment, but I can learn a lot for a short time.",
        technologies: ["C++", "HTML", "Drogon", "Boost.Beast"],
        current: true,
    },
    {
        period: "2022 – 2023",
        role: "A Man Interested In Design",
        company: "In Training Centers.",
        description: "After this study, I have no difficulty in this persuasion of the ability to remain umurbod. After this course I went to different dog routes but I couldn't be interested in any.",
        technologies: ["3D Modeler", "Blender", "3D Animator", "Motion Designer"],
        current: false,
    },
    {
        period: "2025 – 2026",
        role: "Junior Developer",
        company: "Fintech Hub",
        description: "But since February 2025, the frontend direction began to go, and I learned it quite onson due to my persuasion ability. I completed this course in more than 8 months. After this course, I received a diploma, surrounded many friends and acquaintances. I want to strengthen my abilities in this direction right now and build a good life in the future behind this direction",
        technologies: ["React", "Node.js", "Figma", "CSS"],
        current: false,
    },
    {
        period: "2026 – 20**",
        role: "Junior Developer",
        company: "",
        description: "At the moment, I do not go to any courses, but I am improving my qualifications. Taking a break from short studies, I became an intern and went to work in the direction of the Frontend. Here I am now increasing my knowledge.",
        technologies: ["GitHub", "LinkedIN", "Telegram", "Instagramm"],
        current: false,
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Career Journey
                    </span>

                    <h2>
                        Experience{" "}
                        <span className="font-serif italic font-normal text-white">
                            speaks volumes.
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A timeline of my professional growth, from curious beginner to
                        senior engineer leading teams and building products at scale.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div
                                key={idx}
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 shadow-lg" >
                                    {exp.current && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                    )}
                                </div>

                                {/* Content */}
                                <div
                                    className={`pl-8 md:pl-0 ${idx % 2 === 0
                                        ? "md:pr-16 md:text-right"
                                        : "md:col-start-2 md:pl-16"
                                        }`}
                                >
                                    <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                                        <span className="text-sm text-primary font-medium">
                                            {exp.period}
                                        </span>

                                        <h3 className="font-semibold mt-2">{exp.role}</h3>

                                        <p className="text-muted-foreground">{exp.company}</p>

                                        <p className="text-sm text-muted-foreground mt-4">
                                            {exp.description}
                                        </p>

                                        <div
                                            className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""
                                                }`}
                                        >
                                            {exp.technologies.map((tech, techIdx) => (
                                                <span
                                                    key={techIdx}
                                                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};