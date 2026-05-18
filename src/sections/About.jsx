import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
            "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies and best practices.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                My first plan for the future is to find a normal job for my future life. In the first place, this job was about Frontend. This job gives me a lot of opportunities.
                            </p>

                            <p>
                                Secondly, after finding a job, I want to improve my knowledge. This is also a great lesson for my career. After that, I want to open my own business with the money I've saved, such as renting an apartment or opening a car wash.
                            </p>

                            <p>
                                Last, is to buy two Umrah safari tickets for my parent. This is the main goal in my life.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My mission is to create digital experiences that are not just functional, but truly delightful — products that users love to use and developers love to maintain."                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="grid sm:grid-cols-2 gap-6 ">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                style={{ animationDelay: "${(idx +1) *100} ms" }}
                                className="cursor-pointer glass p-6 rounded-2xl animate-fade-in hover:scale-105 transition"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover: bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>

                                <h3 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-muted-foreground text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};