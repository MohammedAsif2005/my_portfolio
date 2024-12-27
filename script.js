document.addEventListener("DOMContentLoaded", () => {
    // Log a success message to the console
    console.log("Portfolio website loaded successfully!");

    // Display a welcome alert to greet the user
    alert("Welcome to My Portfolio! 🌟 Explore and enjoy!");

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

    // Add a dynamic year to the footer
    const footer = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    footer.textContent = `© ${currentYear} Mohammed Asif M U - All Rights Reserved`;
});

