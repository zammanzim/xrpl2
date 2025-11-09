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
            searchPage();
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".toggle-btn");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const gallery = toggle.nextElementSibling;

            if (gallery.classList.contains("show")) {
                gallery.classList.remove("show");
                toggle.classList.remove("active");
            } else {
                gallery.classList.add("show");
                toggle.classList.add("active");
            }
        });
    });
});


function searchPage() {
    const input = document.getElementById('searchInput');
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const message = document.getElementById('searchMessage');

    message.textContent = "";

    const data = [
        { keyword: "0", url: "announcement.html" },
        { keyword: "1", url: "bahasajepang.html#1" },
        { keyword: "2", url: "pjok.html#2" },
        { keyword: "3", url: "informatika.html#3" },
        { keyword: "4", url: "pabp.html#4" },
        { keyword: "5", url: "pp.html#5" },
        { keyword: "6", url: "matematika.html#6" },
        { keyword: "7", url: "dpr2.html#7" },
        { keyword: "8", url: "pabp.html#8" },
        { keyword: "9", url: "bahasajepang.html#9" },
        { keyword: "10", url: "pp.html#10" },
        { keyword: "11", url: "dpr1.html#11" },
        { keyword: "12", url: "matematika.html#12" },
        { keyword: "13", url: "matematika.html#13" },
        { keyword: "14", url: "dpr2.html#14" },
        { keyword: "15", url: "proipas.html#15" },
        { keyword: "16", url: "sejarah.html#16" },
        { keyword: "17", url: "bahasasunda.html#17" },
        { keyword: "18", url: "senibudaya.html#18" },
        { keyword: "19", url: "pp.html#19" },
        { keyword: "20", url: "informatika.html#20" },
        { keyword: "21", url: "pabp.html#21" },
        { keyword: "22", url: "pp.html#22" },
        { keyword: "23", url: "bahasainggris.html#23" },
        { keyword: "24", url: "dpr1.html#24" },
        { keyword: "25", url: "bahasaindonesia.html#25" },
        { keyword: "26", url: "bk.html#26" },
        { keyword: "27", url: "proipas.html#27" },
        { keyword: "28", url: "dpr2.html#28" },
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