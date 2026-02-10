document.addEventListener('DOMContentLoaded', () => {
    // Highlight active button based on current URL
    const updateActiveNav = () => {
        const path = window.location.pathname;
        const page = path.split("/").pop() || "index.html"; // Default to index.html if root

        const navButtons = document.querySelectorAll('.nav-btn');
        
        navButtons.forEach(btn => {
            // Remove active class from all
            btn.classList.remove('active');
            
            // Add active class if href matches current page
            const href = btn.getAttribute('href');
            if (href === page || (page === 'index.html' && href === 'index.html') || (path.endsWith('/') && href === 'index.html')) {
                btn.classList.add('active');
            }
        });
    };

    updateActiveNav();
});
