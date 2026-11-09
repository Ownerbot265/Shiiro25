// NOMOR WHATSAPP ADMIN
// Ganti dengan nomor WhatsApp kamu.
const nomorAdmin = "6281234567890";

// LOGIN GOOGLE (DEMO)
function loginGoogle() {
    alert(
        "Login Google belum diaktifkan.\n" +
        "Website membutuhkan Firebase Authentication."
    );
}

// PEMBELIAN PRODUK
function buy(namaProduk) {
    const pesan =
        "Halo Admin Shiiro Store, saya ingin membeli: " +
        namaProduk;

    const url =
        "https://wa.me/" + nomorAdmin +
        "?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
}

// PENCARIAN PRODUK
function searchProduct() {
    const keyword = document
        .getElementById("search")
        .value.toLowerCase();

    const products = document.querySelectorAll(
        "#product-list .product"
    );

    products.forEach(product => {
        const nama = product.innerText.toLowerCase();

        if (nama.includes(keyword)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// POSTING AKUN GAME
document.getElementById("sellForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document
        .getElementById("namaAkun").value;

    const game = document
        .getElementById("game").value;

    const harga = Number(document
        .getElementById("harga").value);

    const deskripsi = document
        .getElementById("deskripsi").value;

    if (harga < 1000) {
        alert("Harga minimal Rp1.000");
        return;
    }

    const daftar = document.getElementById("product-list");

    // Membuat kartu produk
    const card = document.createElement("div");
    card.className = "product";

    const gambar = document.createElement("div");
    gambar.className = "product-img hsr";
    gambar.textContent = game;

    const judul = document.createElement("h3");
    judul.textContent = nama;

    const keterangan = document.createElement("p");
    keterangan.textContent = deskripsi;

    const hargaProduk = document.createElement("h4");
    hargaProduk.textContent =
        "Rp" + harga.toLocaleString("id-ID");

    const tombol = document.createElement("button");
    tombol.textContent = "Beli Sekarang";

    tombol.onclick = function() {
        buy(nama + " - " + game);
    };

    card.appendChild(gambar);
    card.appendChild(judul);
    card.appendChild(keterangan);
    card.appendChild(hargaProduk);
    card.appendChild(tombol);

    daftar.prepend(card);

    // Kosongkan form
    document.getElementById("sellForm").reset();

    alert("Akun berhasil diposting!");

    document.getElementById("akun")
        .scrollIntoView({ behavior: "smooth" });
});