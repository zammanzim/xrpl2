function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    if (window.innerWidth >= 1024) {
        sidebar.classList.toggle('closed');
        mainContent.classList.toggle('shifted');
    } else {
        sidebar.classList.toggle('open');
    }
}

const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchPage(); // jalankan fungsi searchPage
        }
    });
}

const toggle = document.getElementById('toggle');
const gallery = document.getElementById('gallery');

toggle.addEventListener('click', () => {
    const visible = gallery.style.display === 'flex';
    gallery.style.display = visible ? 'none' : 'flex';
    toggle.classList.toggle('active');
})
function searchPage() {
    const input = document.getElementById('searchInput');
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const message = document.getElementById('searchMessage');

    message.textContent = "";

    const data = [
        { keyword: "1", url: "bahasajepang.html#1" },
        { keyword: "2", url: "pjok.html#2" },
        { keyword: "3", url: "informatika.html#3" },
        { keyword: "4", url: "pabp.html#4" },
        { keyword: "5", url: "pp.html#5" },
        { keyword: "6", url: "matematika.html#6" },
        { keyword: "7", url: "dpr2.html#7" }
    ];

    const result = data.find(item => item.keyword === query);

    if (result) {
        window.location.href = result.url;
    } else {
        input.value = "";

        const oldPlaceholder = input.placeholder;
        input.classList.add('error');
        input.placeholder = "gaada woi";

        setTimeout(() => {
            input.placeholder = oldPlaceholder;
            input.classList.remove('error');
        }, 2500);
    }
}