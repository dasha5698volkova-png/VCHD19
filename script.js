//  Пример простейшей анимации (можно расширить)
document.addEventListener('DOMContentLoaded', function() {
const heroContent = document.querySelector('.hero-content');
heroContent.classList.add('animate');
});

// Пример скрипта для отправки данных формы обратной связи (нужен серверный обработчик)
const feedbackForm = document.querySelector('.feedback-form form');

feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию

const name = document.querySelector('input[name="name"]').value;
const email = document.querySelector('input[name="email"]').value;
const message = document.querySelector('textarea[name="message"]').value;

  // Здесь можно добавить код для отправки данных на сервер (например, с помощью fetch)
  // и обработки ответа сервера.
console.log('Имя:', name);
console.log('Email:', email);
console.log('Сообщение:', message);

  // Очищаем форму после отправки
feedbackForm.reset();
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
const statsSection = document.querySelector('.stats');
const counters = document.querySelectorAll('.stat-number');
let started = false; // Флаг, чтобы анимация сработала только один раз

function startCount(el) {
    let target = +el.dataset.target; // Получаем число из data-target
    let count = 0;
    let speed = target / 100; // Настраиваем скорость (чем больше делитель, тем медленнее)

    let updateCount = () => {
        count += speed;
        if (count < target) {
            el.innerText = Math.ceil(count);
            setTimeout(updateCount, 20); // Интервал обновления (мс)
        } else {
            el.innerText = target;
        }
    };
    updateCount();
}

// Настройка наблюдателя
const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !started) {
        counters.forEach(counter => startCount(counter));
        started = true;
    }
}, { threshold: 0.5 }); // Анимация начнется, когда блок виден наполовину

observer.observe(statsSection);