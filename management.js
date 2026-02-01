window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = "10px 0";
        header.style.backgroundColor = "rgba(242, 242, 242, 0.95)"; // Делаем чуть прозрачным
        header.style.transition = "0.3s"; // Плавный переход
    } else {
        header.style.padding = "15px 0";
        header.style.backgroundColor = "#f2f2f2";
    }
});