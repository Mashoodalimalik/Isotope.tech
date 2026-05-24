document.addEventListener("DOMContentLoaded", () => {
    // 1. Intersection Observer for Scroll Animations
    // This adds the "is-visible" class to elements with "drift-up" when they enter the viewport.
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: unobserve after revealing if you only want it to happen once
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const driftElements = document.querySelectorAll('.drift-up');
    driftElements.forEach(el => observer.observe(el));

    // 2. Parallax effect for floating blocks
    const floatingBlocks = document.querySelector('.floating-blocks');
    if (floatingBlocks) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20; // -10 to 10
            const y = (e.clientY / window.innerHeight - 0.5) * 20; // -10 to 10
            
            // Move blocks slightly based on mouse position to create depth
            floatingBlocks.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
});
