import {
    AlertCircle,
    CheckCircle,
    Mail,
    MapPin,
    Phone,
    Send,
} from "lucide-react"

import { Button } from "../components/Button"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "ziyodkodirov324@gmail.com",
        href: "mailto:ziyodkodirov324@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+998 99 805 71 44",
        href: "tel:+998998057144",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Uzbekistan, Tashkent",
        href: "https://maps.google.com/?q=Tashkent,Uzbekistan",
    },
]

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [isLoading, setIsLoading] = useState(false)

    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    })

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        // VALIDATION
        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.message.trim()
        ) {
            setSubmitStatus({
                type: "error",
                message: "Please fill in all fields.",
            })

            return
        }

        setIsLoading(true)

        setSubmitStatus({
            type: null,
            message: "",
        })

        try {

            // ENV VARIABLES
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

            // CHECK ENV
            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS environment variables are missing."
                )
            }

            // SEND EMAIL
            const response = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: "Ziyod",
                },
                publicKey
            )

            console.log("SUCCESS!", response)

            // SUCCESS MESSAGE
            setSubmitStatus({
                type: "success",
                message:
                    "Message sent successfully! I'll get back to you soon.",
            })

            // RESET FORM
            setFormData({
                name: "",
                email: "",
                message: "",
            })

        } catch (error) {

            console.error("EMAILJS ERROR:", error)

            setSubmitStatus({
                type: "error",
                message:
                    error?.text ||
                    error?.message ||
                    "Failed to send message. Please try again later.",
            })

        } finally {

            setIsLoading(false)
        }
    }

    return (
        <section
            id="contact"
            className="py-32 relative overflow-hidden"
        >

            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-full">

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        Get In Touch
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">

                        Let's build{" "}

                        <span className="font-serif italic font-normal text-white">
                            something great
                        </span>

                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-300">
                        Have a project in mind? I'd love to hear about it.
                        Send me a message and let's discuss how we can work together.
                    </p>

                </div>

                {/* CONTENT */}
                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* FORM */}
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">

                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* NAME */}
                            <div>

                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Name
                                </label>

                                <input
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name..."
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    value={formData.name}
                                    onChange={handleChange}
                                />

                            </div>

                            {/* EMAIL */}
                            <div>

                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email
                                </label>

                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    value={formData.email}
                                    onChange={handleChange}
                                />

                            </div>

                            {/* MESSAGE */}
                            <div>

                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message
                                </label>

                                <textarea
                                    required
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Your message..."
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    value={formData.message}
                                    onChange={handleChange}
                                />

                            </div>

                            {/* BUTTON */}
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full flex items-center justify-center gap-2"
                                disabled={isLoading}
                            >

                                {isLoading ? "Sending..." : "Send Message"}

                                <Send className="w-5 h-5" />

                            </Button>

                            {/* STATUS */}
                            {submitStatus.type && (

                                <div
                                    className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success"
                                            ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                            : "bg-red-500/10 border border-red-500/20 text-red-400"
                                        }`}
                                >

                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    )}

                                    <p className="text-sm">
                                        {submitStatus.message}
                                    </p>

                                </div>
                            )}

                        </form>

                    </div>

                    {/* CONTACT INFO */}
                    <div className="space-y-6">

                        {contactInfo.map((item, index) => {

                            const Icon = item.icon

                            return (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass p-6 rounded-2xl border border-primary/20 flex items-center gap-4 hover:border-primary/50 transition-all"
                                >

                                    <div className="p-3 rounded-xl bg-primary/10">

                                        <Icon className="w-6 h-6 text-primary" />

                                    </div>

                                    <div>

                                        <p className="text-sm text-muted-foreground">
                                            {item.label}
                                        </p>

                                        <p className="font-medium text-secondary-foreground">
                                            {item.value}
                                        </p>

                                    </div>

                                </a>
                            )
                        })}

                    </div>

                </div>

            </div>

        </section>
    )
}