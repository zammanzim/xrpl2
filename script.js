function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    if (window.innerWidth > 768) {
        sidebar.classList.toggle('open');
        mainContent.classList.toggle('shifted');
    } else {
        sidebar.classList.toggle('open');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item a');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.querySelector('.main-content');

            if (window.innerWidth > 768) {
                sidebar.classList.remove('open');
                mainContent.classList.remove('shifted');
            } else {
                sidebar.classList.remove('open');
            }
        });
    });
});

const toggle = document.getElementById('toggle');
const gallery = document.getElementById('gallery');

toggle.addEventListener('click', () => {
    const visible = gallery.style.display === 'flex';
    gallery.style.display = visible ? 'none' : 'flex';
    toggle.classList.toggle('active');
});
