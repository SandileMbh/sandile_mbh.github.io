
 // Loading screen transition
    window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
    loader.classList.add('hidden');

    // Create particles after loading
    createParticles();

    // Start animations
    startAnimation();

    // Initialize other components
    setupIntersectionObserver();
    setupMobileMenu();
    setupScrollTop();
}, 1500);
});

    // Create floating particles
    function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random size
    const size = Math.random() * 15 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Random animation duration
    const duration = Math.random() * 20 + 10;
    particle.style.animationDuration = `${duration}s`;

    // Random delay
    particle.style.animationDelay = `${Math.random() * 5}s`;

    particlesContainer.appendChild(particle);
}
}

    // Text typing effect
    const text = "Data Analyst | Software Engineer | Web Developer | Problem Solver | Tech Enthusiast";
    const textElement = document.getElementById("sliding-text");
    const quoteElement = document.getElementById("quote");
    const quoteContainer = document.getElementById("quote-container");


    // Function to display a random quote
    function displayRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
    quoteContainer.classList.add("show");
}

    // Function to create typing effect
    function createSlidingText(element, text) {
    let i = 0;
    element.textContent = "";

    const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
    clearInterval(interval);
    setTimeout(() => {
    displayRandomQuote();
    startQuoteInterval();
}, 1000);
}
}, 100);
}

    // Start quote interval
    function startQuoteInterval() {
    setInterval(() => {
        quoteContainer.classList.remove("show");
        setTimeout(() => {
            displayRandomQuote();
        }, 500);
    }, 8000);
}

    // Start animation
    function startAnimation() {
    createSlidingText(textElement, text);
}

    // Intersection Observer for animations
    function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
}
});
}, {
    threshold: 0.1
});

    // Observe elements
    document.querySelectorAll('section').forEach(el => observer.observe(el));
    document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
}

    // Mobile menu toggle
    function setupMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
}

    // Close menu when clicking on a link
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
    link.addEventListener('click', () => {
    sidebar.classList.remove('active');
});
});
}

    // Scroll to top button
    function setupScrollTop() {
    const scrollButton = document.querySelector('.scroll-top');

    window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
    scrollButton.classList.add('visible');
} else {
    scrollButton.classList.remove('visible');
}
});

    scrollButton.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});
}

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Update active link
            document.querySelectorAll('.sidebar-menu a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

    // Highlight active section in sidebar
    window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.sidebar-menu a');

    let current = '';

    sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
    current = section.getAttribute('id');
}
});

    navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
    link.classList.add('active');
}
});
});

    // Initialize components when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupScrollTop();
});
