window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    const content = document.getElementById('main-content');

    // Menunggu 3 detik agar animasi loading selesai dengan mulus
    setTimeout(() => {
        loader.style.opacity = '0';
        
        // Menghilangkan elemen loading sepenuhnya setelah transisi selesai
        setTimeout(() => {
            loader.style.display = 'none';
            content.classList.add('show');
        }, 600);
    }, 3000);
});
