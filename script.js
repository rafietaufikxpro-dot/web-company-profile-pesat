// ambil semua tombol yang memiliki class "filter-btn"
// (All,Desain grafis,Desain 3D, fotografi)

const semua_tombol = document.querySelectorAll(".filter-btn");
const semua_gambar = document.querySelectorAll(".gambar");

semua_tombol.forEach((tombol_satuan) => {
  tombol_satuan.addEventListener("click", () => {
    //ubah tampilan active
    // hapus class active dari semua buttons
    semua_tombol.forEach((btn) => btn.classList.remove("active"));
    //tambahkan class active ke tombol yang sedang active yang sedang di pilih
    tombol_satuan.classList.add("active");

    const filter = tombol_satuan.getAttribute("data-filter");

    semua_gambar.forEach((gambar_satuan) => {
      if (filter === "All" || gambar_satuan.classList.contains(filter)) {
        gambar_satuan.style.display = "block";
      } else {
        gambar_satuan.style.display = "none";
      }
    });
  });
});
