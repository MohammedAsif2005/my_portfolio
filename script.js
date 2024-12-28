document.addEventListener("DOMContentLoaded", () => {
    // Log a success message to the console
    console.log("Portfolio website loaded successfully!");

    // Display a dynamic welcome alert based on the time of day
    const currentHour = new Date().getHours();
    let greeting;
    if (currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    alert(`Welcome to My Portfolio! 🌟 ${greeting}! Explore and enjoy!`);

    // Add a typewriter effect to the header's main title
    const headerTitle = document.querySelector("header h1");
    const titleText = headerTitle.textContent;
    headerTitle.textContent = "";
    let i = 0;

    const typeWriter = () => {
        if (i < titleText.length) {
            headerTitle.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Adjust the speed of typing
        }
    };
    typeWriter();

    // Add a smooth scroll effect for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for fixed header
                    behavior: "smooth"
                });
            }
        });
    });

    // Add a "Back to Top" button
    const backToTopButton = document.createElement("button");
    backToTopButton.textContent = "↑ Top";
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "20px";
    backToTopButton.style.right = "20px";
    backToTopButton.style.padding = "10px 15px";
    backToTopButton.style.backgroundColor = "#4CAF50";
    backToTopButton.style.color = "white";
    backToTopButton.style.border = "none";
    backToTopButton.style.borderRadius = "5px";
    backToTopButton.style.cursor = "pointer";
    backToTopButton.style.display = "none"; // Initially hidden
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Show or hide the "Back to Top" button based on scroll position
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Add a dynamic year to the footer
    const footer = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    footer.textContent = `© ${currentYear} Mohammed Asif M U - All Rights Reserved`;

    // Add hover effect to navigation links for better engagement
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#4CAF50";
            link.style.transition = "color 0.3s";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "";
        });
    });

    // Add a fun greeting animation
    const welcomeSection = document.querySelector(".welcome-section");
    if (welcomeSection) {
        const welcomeText = welcomeSection.querySelector("p");
        welcomeText.style.opacity = "0";
        welcomeText.style.transform = "translateY(20px)";
        setTimeout(() => {
            welcomeText.style.transition = "all 1s ease-out";
            welcomeText.style.opacity = "1";
            welcomeText.style.transform = "translateY(0)";
        }, 500);
    }
});
