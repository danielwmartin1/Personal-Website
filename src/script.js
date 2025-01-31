document.addEventListener('DOMContentLoaded', function() {
    const footElement = document.getElementById('foot');
    if (footElement) {
        footElement.textContent = new Date().getFullYear();
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const navItems = document.querySelector('.nav-items');

    if (menuToggle && navItems) {
        navItems.style.display = 'none'; // Ensure initial state is set
        menuToggle.addEventListener('click', () => {
            if (navItems.style.display === 'none' || navItems.style.display === '') {
                navItems.style.display = 'block';
            } else {
                navItems.style.display = 'none';
            }
        });
    }

    function handleResize() {
        if (window.innerWidth < 480) {
            if (menuToggle) menuToggle.style.display = 'block';
            if (navItems) navItems.style.display = 'none';
        } else {
            if (menuToggle) menuToggle.style.display = 'none';
            if (navItems) navItems.style.display = 'flex';
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    const aboutMeEmail = document.querySelector('.about-me-email');
    if (aboutMeEmail) {
        aboutMeEmail.addEventListener('click', function(e) {
            e.preventDefault();
            const email = 'danielwmartin1@gmail.com';
            window.location.href = `mailto:${email}`;
        });
    }
});
