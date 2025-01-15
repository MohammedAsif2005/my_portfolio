document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website loaded successfully!");

    // Dynamic Greeting
    const currentHour = new Date().getHours();
    let greeting = currentHour < 12 ? "Good Morning" : currentHour < 18 ? "Good Afternoon" : "Good Evening";
    alert(`Welcome to My Portfolio! 🌟 ${greeting}! Explore and enjoy!`);

    // GSAP: Typewriter effect with live animation
    const headerTitle = document.querySelector("header h1");
    const titleText = headerTitle.textContent;
    headerTitle.textContent = "";
    const cursor = document.createElement("span");
    cursor.textContent = "|";
    cursor.classList.add("cursor");
    headerTitle.appendChild(cursor);

    let i = 0;
    const typeWriter = () => {
        if (i < titleText.length) {
            headerTitle.textContent = titleText.slice(0, i + 1);
            headerTitle.appendChild(cursor);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            cursor.remove();
        }
    };
    typeWriter();

    // GSAP: Smooth scroll animation for navigation
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                gsap.to(window, {
                    scrollTo: { y: targetElement.offsetTop - 50 },
                    duration: 1,
                    ease: "power2.inOut",
                });
            }
        });
    });

    // "Back to Top" button with animation
    const backToTopButton = document.createElement("button");
    backToTopButton.textContent = "↑ Top";
    Object.assign(backToTopButton.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 15px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        display: "none",
        zIndex: "1000",
    });
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener("click", () => {
        gsap.to(window, {
            scrollTo: { y: 0 },
            duration: 1,
            ease: "power2.inOut",
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
            gsap.fromTo(backToTopButton, { scale: 0.8 }, { scale: 1, duration: 0.5, ease: "bounce.out" });
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // GSAP: Section fade-in animations
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Animation starts when 80% of the section is visible
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 1,
        });
    });

    // Light/Dark mode toggle
    const modeToggleButton = document.createElement("button");
    modeToggleButton.textContent = "Toggle Light/Dark Mode";
    Object.assign(modeToggleButton.style, {
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "10px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        zIndex: "1000",
    });
    document.body.appendChild(modeToggleButton);

    modeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        gsap.to("body", {
            backgroundColor: document.body.classList.contains("dark-mode") ? "#121212" : "#ffffff",
            color: document.body.classList.contains("dark-mode") ? "#ffffff" : "#000000",
            duration: 0.5,
        });
    });

    // GSAP: Welcome section animation
    const welcomeSection = document.querySelector(".welcome-section");
    if (welcomeSection) {
        const welcomeText = welcomeSection.querySelector("p");
        gsap.from(welcomeText, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out",
        });
    }
});
console.log(gsap.version); // Should print the version number, e.g., "3.12.2"
