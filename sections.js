//  Пример плавного скролла к разделу:
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.pto-list a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки

            const targetId = this.getAttribute('href').substring(1); // Получаем ID целевого раздела
            const targetElement = document.getElementById(targetId); // Находим целевой элемент

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, //  Отступ, чтобы заголовок не перекрывался шапкой
                    behavior: 'smooth' // Плавная прокрутка
                });
            }
        });
    });
});
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
// sections.js
document.querySelectorAll('.pto-list a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Убираем активный класс у всех
        document.querySelectorAll('.pto-list a').forEach(el => el.style.backgroundColor = '#fff');
        document.querySelectorAll('.pto-list a').forEach(el => el.style.color = '#003063');
         // Ставим активный стиль нажатой ссылке
        this.style.backgroundColor = '#e44d26';
        this.style.color = '#fff';

    });
});
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("fullImage");
var captionText = document.getElementById("caption");

// Находим все картинки с классом zoom-img
var images = document.querySelectorAll('.zoom-img');

images.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Берем путь к фото из самой картинки
        captionText.innerHTML = this.alt; // Берем описание из атрибута alt
    }
});

// Закрытие при клике на крестик
var span = document.querySelector(".close-modal");
span.onclick = function() { 
    modal.style.display = "none";
}

// Закрытие при клике на темный фон
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}