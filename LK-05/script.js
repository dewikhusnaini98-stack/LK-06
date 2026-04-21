const form = document.getElementById('formPendaftaran');
const nameInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const nohpInput = document.getElementById('nohp');
const kategoriSelect = document.getElementById('kategori');
const pesanInput = document.getElementById('pesan');
const hasil = document.getElementById('hasilPendaftaran');
const notif = document.getElementById('notif');

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = nameInput.value.trim();
    const email = emailInput.value.trim();
    const nohp = nohpInput.value.trim();
    const kategori = kategoriSelect.value;
    const pesan = pesanInput.value.trim();

    if (nama === "" || email === "" || nohp === "" || kategori === "" || pesan === "") {
        alert("Silakan masukkan semua inputan terlebih dahulu!");
        return;
    }

    if (!email.includes('@')) {
        alert('Silahkan masukkan email yang valid.');
        return;
    }

    hasil.innerHTML = `
    <h2>Hasil Input:</h2>
    <p style="color:lightgreen;"><b> Data berhasil dikirim! ✅</b></p>
    <p>Nama: ${nama}</p>
    <p>Email: ${email}</p>
    <p>No HP: ${nohp}</p>
    <p>Kategori: ${kategori}</p>
    <p>Pesan: ${pesan}</p>
`;

    form.reset();
});

// --- Interaksi Sosial Media (Ripple Effect) ---
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        let ripple = document.createElement('span');
        ripple.classList.add('ripple');

        let rect = this.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// --- Fitur Visitor ---
let count = localStorage.getItem('visitorCount');
if (!count) {
    count = 1;
} else {
    count = parseInt(count) + 1;
}
localStorage.setItem('visitorCount', count);
document.getElementById('visitorCount').innerText = count.toLocaleString('id-ID');

// --- Fitur Toggle Theme (Dark/Light Mode) ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Cek preferensi user dari local storage saat hal dimuat
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

// Event listener saat tombol tema di-klik
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});