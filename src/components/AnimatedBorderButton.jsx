export const AnimatedBorderButton = ({ children }) => {
    return (
        <button className="relative px-8 py-4 text-lg font-medium rounded-full overflow-hidden group bg-surface text-foreground">

            {/* SVG */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 40"  
                preserveAspectRatio="none"
            >
                <rect
                    x="1"
                    y="1"
                    width="98"
                    height="38"
                    rx="20"
                    ry="20"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeDasharray="140"
                    strokeDashoffset="140"
                    className="animated-border-path opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
            </svg>

            {/* Content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};