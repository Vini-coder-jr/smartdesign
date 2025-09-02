
        const toggleButton = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        toggleButton.addEventListener('click', () => {
            toggleButton.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !toggleButton.contains(e.target)) {
                toggleButton.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
