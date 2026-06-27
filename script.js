// Premium Portfolio Interactive Scripting

document.addEventListener("DOMContentLoaded", () => {
    // 1. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip empty anchors
            e.preventDefault();
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Typewriter Terminal Effect for Hero Subtitle
    const subtitleText = "AI Engineer specializing in Deep Learning, Graph Neural Networks, and Custom LLMs.";
    const speed = 40; // typing speed in milliseconds
    let i = 0;
    const typewriterElement = document.getElementById("typewriter-text");

    if (typewriterElement) {
        typewriterElement.classList.add("typewriter-cursor");
        function typeWriter() {
            if (i < subtitleText.length) {
                typewriterElement.textContent += subtitleText.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }

    // 3. Mobile Navigation Menu Drawer Toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenuDrawer = document.getElementById("mobile-menu-drawer");
    const mobileMenuCloseBtn = document.getElementById("mobile-menu-close-btn");
    const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

    if (mobileMenuBtn && mobileMenuDrawer) {
        // Open Mobile Menu
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenuDrawer.classList.remove("translate-x-full");
            mobileMenuDrawer.classList.add("translate-x-0");
            document.body.classList.add("overflow-hidden"); // Stop page scroll when menu is open
        });
    }

    const closeMobileMenu = () => {
        if (mobileMenuDrawer) {
            mobileMenuDrawer.classList.remove("translate-x-0");
            mobileMenuDrawer.classList.add("translate-x-full");
            document.body.classList.remove("overflow-hidden");
        }
    };

    if (mobileMenuCloseBtn) {
        mobileMenuCloseBtn.addEventListener("click", closeMobileMenu);
    }

    mobileMenuLinks.forEach(link => {
        link.addEventListener("click", closeMobileMenu);
    });

    // 4. Dynamic Project Filtering
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Remove active classes from all filter buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove("bg-sky-500", "text-slate-950", "shadow-[0_0_15px_rgba(56,189,248,0.25)]");
                    btn.classList.add("bg-slate-800/50", "text-slate-400", "hover:text-slate-200");
                });

                // Add active styles to the clicked button
                button.classList.add("bg-sky-500", "text-slate-950", "shadow-[0_0_15px_rgba(56,189,248,0.25)]");
                button.classList.remove("bg-slate-800/50", "text-slate-400", "hover:text-slate-200");

                const filterValue = button.getAttribute("data-filter");

                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute("data-category");
                    
                    if (filterValue === "all" || cardCategory === filterValue) {
                        // Show card with a subtle animation
                        card.style.display = "flex";
                        card.style.opacity = "0";
                        setTimeout(() => {
                            card.style.transition = "opacity 0.3s ease";
                            card.style.opacity = "1";
                        }, 50);
                    } else {
                        // Hide card
                        card.style.display = "none";
                    }
                });
            });
        });
    }
});
