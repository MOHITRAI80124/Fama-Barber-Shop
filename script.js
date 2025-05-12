const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when a link is clicked
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Set Current Year in Footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Simple Fade-In Animation on Scroll
        const sections = document.querySelectorAll('.fade-in-section');
        const options = {
            root: null, // relative to document viewport
            rootMargin: '0px',
            threshold: 0.1 // trigger when 10% of the element is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: stop observing once animated
                    // observer.unobserve(entry.target);
                }
                // Optional: remove class if scrolling up out of view
                // else {
                //     entry.target.classList.remove('is-visible');
                // }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });
