// База данных контента сайта (дополняй её по мере создания страниц)
const siteContent = [
    { 
        title: "Главная страница", 
        url: "index.html", 
        text: "вчдэ-19 войновка эксплуатационное вагонное депо свердловская железная дорога ржд техническое обслуживание ремонт вагонов подготовка к перевозкам надежность безопасность" 
    },
    { 
        title: "История депо", 
        url: "history.html", 
        text: "история становления развитие достижения ветераны традиции трудовой путь становление узла тюмень архивные фото ключевые даты этапы развития" 
    },
    { 
        title: "Производственные участки", 
        url: "sections.html", 
        text: "структура цеха участки пто войновка пто тобольск пто тюмень пот камышлов техническое обслуживание осмотр вагонов ремонтные пункты мастера начальники участков" 
    },
    { 
        title: "Руководство депо", 
        url: "management.html", 
        text: "аппарат управления начальник депо главный инженер заместители фио контакты график приема администрация должностные лица" 
    },
    { 
        title: "Контактная информация", 
        url: "contacts.html", 
        text: "адрес местоположение схема проезда телефон приемная электронная почта email реквизиты режим работы карта яндекс гугл" 
    },
    { 
        title: "Вакансии и кадры", 
        url: "history.html", 
        text: "работа в депо соискатели трудоустройство обучение квалификация социальный пакет молодежная политика специалисты кадровый резерв" 
    },
    { 
        title: "ПТО Тобольск", 
        url: "sections.html", 
        text: "участок тобольск нефтехимические продукты цистерны осмотр ремонт обслуживание на станции тобольск контакты начальника" 
    },
    { 
        title: "ПТО Войновка", 
        url: "sections.html", 
        text: "основной пункт технического обслуживания сортировочная станция главный ход транссиба осмотр грузовых вагонов" 
    }
];

const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('searchResults');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    resultsDiv.innerHTML = '';
    
    if (query.length < 2) {
        resultsDiv.style.display = 'none';
        return;
    }

    const filtered = siteContent.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.text.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
        filtered.forEach(item => {
            const div = document.createElement('div');
            div.className = 'search-item';
            div.innerHTML = `
                <a href="${item.url}">
                    <strong>${item.title}</strong>
                    <small>${item.text.substring(0, 50)}...</small>
                </a>
            `;
            resultsDiv.appendChild(div);
        });
        resultsDiv.style.display = 'block';
    } else {
        resultsDiv.innerHTML = '<div class="search-item">Ничего не найдено</div>';
        resultsDiv.style.display = 'block';
    }
});

// Закрытие поиска при клике вне его
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        resultsDiv.style.display = 'none';
    }
});