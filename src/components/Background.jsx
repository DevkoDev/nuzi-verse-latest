import { useEffect, useRef } from "react";

function CanvasComponent() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        const ctx = canvas.getContext("2d");

        const numStars = 500;
        const stars = [];

        function centerX() {
            return canvas.width / 2;
        }

        function centerY() {
            return canvas.height / 2;
        }

        function initializeStars() {
            stars.length = 0; // Clear the stars array
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width - centerX(),
                    y: Math.random() * canvas.height - centerY(),
                    z: Math.random() * canvas.width
                });
            }
        }

        function resizeCanvas() {
            if (container) {
                const { width, height } = container.getBoundingClientRect();
                canvas.width = width;
                canvas.height = height;
                initializeStars(); // Reinitialize stars when resizing
            }
        }

        // Debounce function to delay execution
        function debounce(func, delay) {
            let timeoutId;
            return function (...args) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => func.apply(this, args), delay);
            };
        }

        // Debounced resize function with 0.5 seconds delay
        const debouncedResizeCanvas = debounce(resizeCanvas, 200);

        // Initial setup
        resizeCanvas();
        window.addEventListener("resize", debouncedResizeCanvas);

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "white";

            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];
                const x = centerX() + (star.x / star.z) * canvas.width;
                const y = centerY() + (star.y / star.z) * canvas.height;
                const size = 1.5 * (1 - star.z / canvas.width);

                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2, false);
                ctx.fill();
                star.z -= 2;

                if (star.z <= 0) {
                    star.z = canvas.width;
                    star.x = Math.random() * canvas.width - centerX();
                    star.y = Math.random() * canvas.height - centerY();
                }
            }

            requestAnimationFrame(draw);
        }

        draw();

        return () => {
            window.removeEventListener("resize", debouncedResizeCanvas);
        };
    }, []);

    return (
        <div ref={containerRef} className="canvasContainer position-fixed" style={{ width: "100%", height: "100%", zIndex: "-9999", backgroundColor:"black"}}>
            <canvas ref={canvasRef} className="backgroundCanvas"></canvas>
        </div>
    );
}

export default CanvasComponent;
