import { gsap } from "gsap";

// Example Animation for Hero Section
gsap.from("#hero h2", { opacity: 0, y: 50, duration: 1 });
gsap.from("#hero p", { opacity: 0, y: 50, duration: 1.2, delay: 0.3 });
gsap.from("#hero button", { opacity: 0, y: 50, duration: 1.4, delay: 0.6 });
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.from("#about h2", {
    scrollTrigger: "#about",
    opacity: 0,
    x: -100,
    duration: 1
});
