const form = document.getElementById('formPendaftaran');
const nameInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const nohpInput = document.getElementById('nohp');
const kategoriSelect = document.getElementById('kategori');
const pesanInput = document.getElementById('pesan');
const hasil = document.getElementById('hasilPendaftaran');
const notif = document.getElementById('notif');

form.addEventListener("submit", function(event) {
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