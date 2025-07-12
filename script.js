function contactViaWA() {
  const phone = '6281234567890'; // Ganti dengan nomor WA admin
  const message = encodeURIComponent('Halo, saya tertarik dengan produk di Pasar Suryaloka Keling.');
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}
