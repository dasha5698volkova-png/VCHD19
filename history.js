document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.image-gallery img');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const closeButton = document.getElementById('close-button');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const fullsizeImageSrc = this.dataset.fullsize || this.src; // Используем data-fullsize, если есть
            fullscreenImage.src = fullsizeImageSrc;
            fullscreenOverlay.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function() {
        fullscreenOverlay.style.display = 'none';
    });

    // Закрытие по клику вне изображения
    fullscreenOverlay.addEventListener('click', function(event) {
        if (event.target === this) { // Проверяем, что клик был именно на оверлее, а не на изображении
            fullscreenOverlay.style.display = 'none';
        }
    });

    // Закрытие по нажатию Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            fullscreenOverlay.style.display = 'none';
        }
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


    var acc = document.getElementsByClassName("accordion-header");
    
    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            // Переключаем класс active для смены цвета кнопки
            this.classList.toggle("active");
            
            // Находим блок с текстом
            var panel = this.nextElementSibling;
            
            // Если панель открыта — закрываем, если закрыта — открываем
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                //scrollHeight вычисляет реальную высоту контента
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        };
    }


// history.js
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('fullscreen-overlay');
    const fullImg = document.getElementById('fullscreen-image');
    const closeBtn = document.getElementById('close-button');
    const galleryImages = document.querySelectorAll('.image-gallery img');

    // Открытие изображения
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            const fullSizeSrc = img.getAttribute('data-fullsize');
            fullImg.src = fullSizeSrc;
            overlay.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы
        });
    });

    // Закрытие по кнопке
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        fullImg.src = "";
        document.body.style.overflow = 'auto'; // Возвращаем прокрутку
    });

    // Закрытие по клику на фон
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
            fullImg.src = "";
            document.body.style.overflow = 'auto';
        }
    });
});