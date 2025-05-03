const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
});

navbar.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navbar.style.display = 'none'; // Hide menu when a link is clicked
    }
});