import { useState } from "react";
import otash from '../assets/img/otash.jpg'
import behi from '../assets/img/Behi.jpg'
import said from '../assets/img/Said.jpg'
import teo from '../assets/img/TiaDor.jpg'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Otabek one of the talanted person in my school. He know a lot of things about computers. He is frandly person and he can find new friends easier. His hobby is play video games.",
        author: "Sobirov Otabek",
        role: "Game Design.",
        avatar: otash,
    },
    {
        quote: "Behruz one of the my best friend. He is my classmate and Nowadays he learning English language. Besides that he also playing football game very well!",
        author: "O'tkirov Behruz",
        role: "Create some design and describe it",
        avatar: behi,
    },
    {
        quote: "He is also my friend. His hobby is play football. Nowadays he plays in the Bunyotkor team and in the future he will play in main team.",
        author: "Siadnabiyev Saida'lo",
        role: "Also best friend",
        avatar: said,
    },
    {
        quote: "This hero is one of the popular hero in the movie. He has a good charactor and others, with him you will not be bored.",
        author: "Tiador ( Teo )",
        role: "Hero",
        avatar: teo,
    },
];

export const Testimonials = () => {

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    };

    return (
        <section id='testimonials' className="py-32 relative overflow-hidden">

            <div className="absolute top-1/2 left-1/2
            w-[800px] h-[800px] bg-primary/5
            rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className='text-secandary-foreground text-sm font-medium tracking-wider uppercase'>
                        What People Say
                    </span>

                    <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground'>
                        Kind words from{" "}
                        <span className='font-serif italic font-normal text-white'>
                            amazing people
                        </span>
                    </h2>
                </div>

                {/* Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="glass p-8 rounded-3xl md:p-12 glow-border">

                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className='w-6 h-6 text-primary-foreground' />
                            </div>

                            <blockquote className='text-xl font-medium leading-relaxed mb-8 pt-4'>
                                {testimonials[current].quote}
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonials[current].avatar}
                                    alt={testimonials[current].author}
                                    className='w-14 h-14 rounded-full object-cover'
                                />

                                <div>
                                    <div className="font-semibold">
                                        {testimonials[current].author}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonials[current].role}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">

                            <button
                                onClick={prevSlide}
                                className='p-3 rounded-full glass hover:bg-primary/10 transition-all'
                            >
                                <ChevronLeft />
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrent(idx)}
                                        className={`h-2 rounded-full transition-all duration-300 ${idx === current
                                                ? "w-8 bg-primary"
                                                : "w-2 bg-muted-foreground/30"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className='p-3 rounded-full glass hover:bg-primary/10 transition-all'
                            >
                                <ChevronRight />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};