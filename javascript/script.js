document.addEventListener('DOMContentLoaded', () => {

    // 1. Array data produk
    // Setiap produk adalah sebuah objek dengan properti: id, nama, harga, deskripsi, gambar, dan kategori.
    const products = [
        {
            id: 1,
            name: "Laptop Pro",
            price: 15000000,
            description: "Laptop canggih untuk para profesional.",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
            category: "elektronik"
        },
        {
            id: 2,
            name: "T-Shirt Casual",
            price: 150000,
            description: "Kaos katun nyaman untuk sehari-hari.",
            image: "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fHww",
            category: "pakaian"
        },
        {
            id: 3,
            name: "Buku Pemrograman JavaScript",
            price: 250000,
            description: "Panduan lengkap untuk menguasai JavaScript.",
            image: "https://plus.unsplash.com/premium_photo-1667251760504-096946b820af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBidWt1JTIwamF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D",
            category: "buku"
        },
        {
            id: 4,
            name: "Smartphone X",
            price: 8000000,
            description: "Smartphone dengan kamera terbaik di kelasnya.",
            image: "https://plus.unsplash.com/premium_photo-1681396658834-b56190480934?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lfGVufDB8fDB8fHww",
            category: "elektronik"
        },
        {
            id: 5,
            name: "Kemeja Formal",
            price: 350000,
            description: "Kemeja pas badan untuk acara resmi.",
            image: "https://plus.unsplash.com/premium_photo-1661308261387-9aca7336e9ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VtZWphJTIwZm9ybWFsfGVufDB8fDB8fHww",
            category: "pakaian"
        },
        {
            id: 6,
            name: "Novel Fiksi Ilmiah",
            price: 120000,
            description: "Kisah petualangan di luar angkasa.",
            image: "https://images.unsplash.com/photo-1704869223921-c0f09b23f18f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm92ZWwlMjBmaWtzaSUyMGlsbWlhaHxlbnwwfHwwfHx8MA%3D%3D",
            category: "buku"
        }
    ];

    const productListContainer = document.getElementById('product-list');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // 2. Fungsi untuk menampilkan produk di halaman (Looping)
    const displayProducts = (productsToDisplay) => {
        // Kosongkan kontainer sebelum menampilkan produk baru
        productListContainer.innerHTML = '';

        productsToDisplay.forEach(product => {
            // Format harga ke dalam format Rupiah
            const formattedPrice = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0
            }).format(product.price);

            // Buat elemen HTML untuk setiap produk
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="product-price">${formattedPrice}</p>
                <p class="product-description">${product.description}</p>
            `;
            // Tambahkan kartu produk ke dalam kontainer
            productListContainer.appendChild(productCard);
        });
    };

    // 3. Logika untuk filter sederhana
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.dataset.category;

            // Hapus kelas 'active' dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Tambahkan kelas 'active' ke tombol yang diklik
            e.target.classList.add('active');

            if (category === 'semua') {
                // Jika kategori adalah 'semua', tampilkan semua produk
                displayProducts(products);
            } else {
                // Jika kategori lain, filter produknya
                const filteredProducts = products.filter(product => product.category === category);
                displayProducts(filteredProducts);
            }
        });
    });

    // Tampilkan semua produk saat halaman pertama kali dimuat
    displayProducts(products);

});