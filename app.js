const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const scrollToTopBtn = document.getElementById('scrollToTop');

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    themeToggleBtn.textContent = body.classList.contains('light-theme') ? 'Dark Theme' : 'Light Theme';
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
