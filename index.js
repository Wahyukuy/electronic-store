document.addEventListener('DOMContentLoaded', () => {
    // 1. DATA PRODUK
    const products = {
        electronic: [
            "Kulkas 2 Pintu", 
            "Sofa Getaran Pintar", 
            "Kursi Pijat Ergonomis", 
            "Meja Kontrol Suhu", 
            "TV Layar Lebar 4K", 
            "AC Inverter Hemat", 
            "Bathub Jacuzzi Mewah", 
            "Kipas Angin Turbo"
        ],
        furniture: [
            "Meja Kerja Minimalis", 
            "Kursi Makan Kayu", 
            "Lampu Gantung Modern", 
            "Lemari Pakaian 3 Pintu", 
            "Rak Buku Modular", 
            "Kasur Busa Premium",
            "Sofa Ruang Tamu L"
        ]
    };

    // 2. AMBIL ELEMEN DARI HTML
    const categoryButton = document.getElementById('category-button');
    const modal = document.getElementById('category-modal');
    const closeBtn = document.querySelector('.close-btn');
    const productDisplay = document.getElementById('product-display');
    const categoryBtns = document.querySelectorAll('.category-btn');

    // 3. LOGIKA UNTUK MENAMPILKAN DAN MENYEMBUNYIKAN MODAL

    // Tampilkan Modal saat tombol utama diklik
    categoryButton.onclick = function() {
        modal.style.display = "block";
    }

    // Sembunyikan Modal saat tombol 'x' diklik
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Sembunyikan Modal saat klik di luar area modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // 4. LOGIKA UNTUK MEMUAT PRODUK
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            displayProducts(category);
            modal.style.display = "none"; // Tutup modal setelah memilih
        });
    });

    function displayProducts(category) {
        productDisplay.innerHTML = ''; // Hapus konten lama

        const productList = products[category];
        
        productList.forEach(productName => {
            const item = document.createElement('div');
            item.className = 'product-item';
            
            // Elemen Placeholder Gambar
            const imgPlaceholder = document.createElement('div');
            imgPlaceholder.className = 'product-item-img';
            imgPlaceholder.textContent = `[Gambar ${productName}]`;

            // Nama Produk
            const name = document.createElement('h3');
            name.textContent = productName;

            item.appendChild(imgPlaceholder);
            item.appendChild(name);
            productDisplay.appendChild(item);
        });
    }

});
