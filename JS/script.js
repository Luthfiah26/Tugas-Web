const NAMA_TOKO = "Syifa` Bakery";

const daftarPilihanMenu = [
    { nama: "Chocolate Almond Croissant", harga: 25000 },
    { nama: "Coffee Latte", harga: 20000 },
    { nama: "Matcha Cinnamon Roll", harga: 24000 },
    { nama: "Caramel Cheesecake", harga: 28000 },
    { nama: "Iced Brown Sugar", harga: 26000 },
    { nama: "Brownies Matcha", harga: 29000 },
    { nama: "Chocolate Croissant", harga: 18000 },
    { nama: "Cheese Croissant", harga: 22000 },
    { nama: "Buttery Garlic Croissant", harga: 20000 },
    { nama: "Apple Cinnamon Roll", harga: 23000 },
    { nama: "Strawberry Cheesecake", harga: 32000 },
    { nama: "Banana Cheesecake", harga: 30000 },
    { nama: "Blueberry Cheesecake", harga: 33000 },
    { nama: "Red Velvet Cheesecake", harga: 34000 },
    { nama: "Tiramisu Brownies", harga: 27000 },
    { nama: "Croissant Pistachio", harga: 35000 },
    { nama: "Banana Muffin", harga: 16000 },
    { nama: "Blueberry Muffin", harga: 17000 },
    { nama: "Chocochips Muffin", harga: 16000 },
    { nama: "Strawberry Muffin", harga: 17000 },
    { nama: "Cappuccino Love", harga: 25000 },
    { nama: "Cheese Sandwich", harga: 22000 },
    { nama: "Coffee Latte Cream", harga: 24000 },
    { nama: "Fruit Cream Sandwich", harga: 26000 },
    { nama: "Ice Americano", harga: 18000 },
    { nama: "Ice Caramel Latte", harga: 27000 },
    { nama: "Mango Matcha Latte", harga: 28000 },
    { nama: "Matcha Latte", harga: 25000 },
    { nama: "Strawberry Matcha", harga: 29000 },
    { nama: "Egg Mayo Sandwich", harga: 21000 },
    { nama: "Vanilla Latte", harga: 23000 }
];

function prosesPesanan(namaMenu, hargaSatuan) {
    alert("Selamat Datang di " + NAMA_TOKO);

    let inputNama = prompt("Masukkan Nama Pemesan:");

    if (inputNama === null || inputNama === "") {
        alert("Pemesanan dibatalkan.");
        return;
    }

    let namaPemesan = inputNama;

    let inputJumlah = prompt("Masukkan jumlah beli " + namaMenu + ":", "1");
    let jumlahUtama = Number(inputJumlah);
    if (!jumlahUtama || jumlahUtama < 1) {
        jumlahUtama = 1;
    }

    let daftarPesanan = [
        { menu: namaMenu, harga: hargaSatuan, jumlah: jumlahUtama }
    ];

    let tambahPesanan = confirm("Pesanan utama: " + namaMenu + " x" + jumlahUtama + "\nApakah Anda ingin menambah 1 menu pesanan lainnya?");

    if (tambahPesanan) {
        let teksPilihan = "Pilih Nomor Menu Tambahan:\n\n";
        daftarPilihanMenu.forEach(function (item, index) {
            teksPilihan += (index + 1) + ". " + item.nama + " - Rp " + item.harga + "\n";
        });

        let pilihanInput = prompt(teksPilihan);
        let indeks = Number(pilihanInput) - 1;

        if (indeks >= 0 && indeks < daftarPilihanMenu.length) {
            let menuPilihan = daftarPilihanMenu[indeks];
            let inputQtyTambahan = prompt("Masukkan jumlah beli " + menuPilihan.nama + ":", "1");
            
            let qtyTambahan = Number(inputQtyTambahan);
            if (!qtyTambahan || qtyTambahan < 1) qtyTambahan = 1;

            daftarPesanan.push({
                menu: menuPilihan.nama,
                harga: menuPilihan.harga,
                jumlah: qtyTambahan
            });
        } else {
            alert("Nomor pilihan menu tambahan tidak valid, pesanan utama tetap diproses.");
        }
    }

    let totalBayar = 0;

    document.write("<link rel='stylesheet' href='../CSS/nota.css'><link rel='stylesheet' href='./CSS/nota.css'>");
    document.write("<div class='struk-box'>");
    document.write("<h2>STRUK PESANAN</h2>");
    document.write("<h3>" + NAMA_TOKO + "</h3>");
    document.write("<hr>");
    document.write("<p><strong>Nama Pemesan:</strong> " + namaPemesan + "</p>");
    document.write("<h4>Daftar Pesanan:</h4><ul>");

    daftarPesanan.forEach(function (item) {
        let subtotal = item.harga * item.jumlah;
        totalBayar += subtotal;
        document.write("<li>" + item.menu + " (x" + item.jumlah + ") - Rp " + subtotal + "</li>");
    });

    document.write("</ul><hr>");
    document.write("<p><strong>Total Pembayaran:</strong> Rp " + totalBayar + "</p>");

    document.write("<p style='text-align:center; color:#e67e22;'>" + "⭐ ".repeat(5) + "</p>");
    document.write("<p class='pesan-terimakasih'>Terima kasih telah berbelanja di " + NAMA_TOKO + "!</p>");
    document.write("<a class='tombol-kembali' href='javascript:history.back()'>Kembali ke Halaman Menu</a>");
    document.write("</div>");
}

function pesanSekarang(namaMenu, hargaSatuan) {
    prosesPesanan(namaMenu, hargaSatuan);
}






