let keranjang = [];

function beli(nama, harga) {
  const produk = keranjang.find((item) => item.nama === nama);

  if (produk) {
    produk.jumlah++;
  } else {
    keranjang.push({
      nama: nama,
      harga: harga,
      jumlah: 1,
    });
  }

  tampilkanKeranjang();
}

function tampilkanKeranjang() {
  const list = document.getElementById("listBelanja");
  const totalText = document.getElementById("total");

  list.innerHTML = "";

  let total = 0;

  keranjang.forEach((item, index) => {
    total += item.harga * item.jumlah;

    list.innerHTML += `
        <li>
            <strong>${item.nama}</strong><br>
            Rp${item.harga.toLocaleString("id-ID")} x ${item.jumlah}
            = <b>Rp${(item.harga * item.jumlah).toLocaleString("id-ID")}</b>

            <br><br>

            <button onclick="kurang(${index})">-</button>
            <button onclick="tambah(${index})">+</button>
            <button onclick="hapus(${index})">Hapus</button>

            <hr>
        </li>
        `;
  });

  totalText.innerHTML = "Rp" + total.toLocaleString("id-ID");
}

function tambah(index) {
  keranjang[index].jumlah++;
  tampilkanKeranjang();
}

function kurang(index) {
  keranjang[index].jumlah--;

  if (keranjang[index].jumlah <= 0) {
    keranjang.splice(index, 1);
  }

  tampilkanKeranjang();
}

function hapus(index) {
  keranjang.splice(index, 1);
  tampilkanKeranjang();
}

function resetBelanja() {
  if (confirm("Yakin ingin mengosongkan keranjang?")) {
    keranjang = [];
    tampilkanKeranjang();
  }
}
