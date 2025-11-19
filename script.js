// 1. Inisialisasi variabel untuk menyimpan nilai counter saat ini
let counter = 0;

// 2. Ambil elemen HTML yang akan menampilkan nilai dan tombol
const counterDisplay = document.getElementById('counter-value');
const buttonTambah = document.getElementById('btn-tambah');
const buttonKurang = document.getElementById('btn-kurang');
const buttonReset = document.getElementById('btn-reset');

// 3. Fungsi untuk memperbarui tampilan counter di HTML
function updateDisplay() {
    counterDisplay.textContent = counter;
}

// 4. Tambahkan Event Listener ke setiap tombol

// --- Logika Tombol Tambah ---
buttonTambah.addEventListener('click', function() {
    counter += 1;
    updateDisplay();
});

// --- Logika Tombol Kurang ---
buttonKurang.addEventListener('click', function() {
    counter -= 1;
    updateDisplay();
});

// --- Logika Tombol Reset ---
buttonReset.addEventListener('click', function() {
    counter = 0;
    updateDisplay();
});

updateDisplay();