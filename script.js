/* =========================================
   ДАННЫЕ ПЕРСОНАЖЕЙ
========================================= */

const characters = {
    eliana: {
        name: "Элиана",
        title: "Хранительница Света",
        description:
            "Элиана — хранительница древнего света, чья судьба связана с равновесием мира. Добрая, мудрая и бесстрашная, она готова пожертвовать собой ради других.",
        quote: "Свет не требует власти. Он просто показывает путь.",
        race: "Эльф",
        role: "Целительница",
        age: "248 лет",
        homeland: "Эллария",
        story: [
            "С детства Элиана чувствовала свет вокруг себя.",
            "Обучаясь в Храме Света, она узнала о своей миссии — защищать мир от надвигающейся тьмы.",
            "Но с каждым годом она всё больше понимает, что свет и тьма неразделимы."
        ],
        abilities: [
            {
                name: "Свет исцеления",
                description: "Восстанавливает здоровье союзников и снимает последствия тёмной магии.",
                icon: "✦"
            },
            {
                name: "Щит Света",
                description: "Создаёт защитный барьер, способный выдержать сильнейшие атаки.",
                icon: "◇"
            },
            {
                name: "Гнев Света",
                description: "Высвобождает накопленную энергию света и поражает врагов.",
                icon: "✧"
            }
        ],
        connections: [
            {
                name: "Кайр",
                description: "Союзник, связанный с Элианой древней тайной."
            },
            {
                name: "Дариен",
                description: "Человек, которому Элиана не может полностью доверять."
            },
            {
                name: "Морвена",
                description: "Главная противоположность и одна из самых старых угроз."
            }
        ]
    },

    darien: {
        name: "Дариен",
        title: "Тень Прошлого",
        description: "Странник, скрывающий своё прошлое. Его имя связано с событиями Великой войны.",
        quote: "Некоторые тайны лучше оставить в прошлом.",
        race: "Человек",
        role: "Воин",
        age: "31 год",
        homeland: "Нордвелл",
        story: [
            "Когда-то Дариен был частью королевской гвардии.",
            "После падения старого королевства он исчез и несколько лет провёл в изгнании.",
            "Теперь он возвращается в мир, который изменился без него."
        ],
        abilities: [
            {
                name: "Теневой шаг",
                description: "Позволяет исчезнуть из поля зрения противника.",
                icon: "✦"
            },
            {
                name: "Последний удар",
                description: "Мощная атака против одной цели.",
                icon: "◇"
            },
            {
                name: "Инстинкт",
                description: "Позволяет чувствовать скрытые угрозы.",
                icon: "✧"
            }
        ],
        connections: [
            {
                name: "Элиана",
                description: "Неожиданный союзник."
            },
            {
                name: "Морвена",
                description: "Связь из далёкого прошлого."
            }
        ]
    },

    kair: {
        name: "Кайр",
        title: "Пожиратель Бурь",
        description: "Таинственный странник, способный управлять древней магией неба.",
        quote: "Молния всегда возвращается туда, где родилась.",
        race: "Неизвестно",
        role: "Маг",
        age: "Неизвестно",
        homeland: "Небесные земли",
        story: [
            "Кайр появился во время первой великой бури.",
            "С тех пор он странствует между землями.",
            "Он пытается найти источник собственной силы."
        ],
        abilities: [
            {
                name: "Гнев бури",
                description: "Призывает разрушительную молнию.",
                icon: "✦"
            },
            {
                name: "Разряд",
                description: "Поражает несколько целей одновременно.",
                icon: "◇"
            },
            {
                name: "Взгляд небес",
                description: "Позволяет видеть происходящее далеко за пределами.",
                icon: "✧"
            }
        ],
        connections: [
            {
                name: "Элиана",
                description: "Единственный человек, которому Кайр доверяет."
            }
        ]
    },

    morvena: {
        name: "Морвена",
        title: "Шепчущая Тьма",
        description: "Хозяйка древней магии Тенебриса, знающая тайны, забытые остальными народами.",
        quote: "Тьма не всегда означает зло.",
        race: "Неизвестно",
        role: "Колдунья",
        age: "Неизвестно",
        homeland: "Тенебрис",
        story: [
            "Морвена появилась в Тенебрисе задолго до Великой войны.",
            "Одни считают её причиной катастрофы.",
            "Другие считают её единственной, кто пытался её остановить."
        ],
        abilities: [
            {
                name: "Шёпот Тьмы",
                description: "Позволяет управлять тенями.",
                icon: "✦"
            },
            {
                name: "Пелена",
                description: "Скрывает пространство от чужих глаз.",
                icon: "◇"
            },
            {
                name: "Бездна",
                description: "Призывает древнюю силу Тенебриса.",
                icon: "✧"
            }
        ],
        connections: [
            {
                name: "Элиана",
                description: "Главная противоположность Морвены."
            },
            {
                name: "Дариен",
                description: "Связаны событиями Великой войны."
            }
        ]
    }
};

/* =========================================
   ЗАГРУЗКА СТРАНИЦЫ ПЕРСОНАЖА
========================================= */

// Проверяем, находимся ли мы на странице персонажа
if (document.querySelector('.character-page')) {

    // Получаем ID из URL
    const params = new URLSearchParams(window.location.search);
    const characterId = params.get('id') || 'eliana';
    const character = characters[characterId];

    // Если персонаж не найден — показываем сообщение и перенаправляем на главную
    if (!character) {
        document.body.innerHTML = `
            <div style="text-align:center;padding:80px 20px;font-family:Arial,sans-serif;">
                <h1 style="font-weight:400;">Персонаж не найден</h1>
                <p style="color:#777;margin:20px 0;">Вернитесь на <a href="index.html" style="color:#a68f77;">главную страницу</a>.</p>
            </div>
        `;
        return;
    }

    // Обновляем заголовок страницы
    document.title = `LORA — ${character.name}`;

    // --- ЛЕВАЯ ЧАСТЬ (sidebar) ---

    const nameEl = document.querySelector('#character-name');
    if (nameEl) nameEl.textContent = character.name;

    const titleEl = document.querySelector('#character-title');
    if (titleEl) titleEl.textContent = character.title;

    const descEl = document.querySelector('#character-description');
    if (descEl) descEl.textContent = character.description;

    const quoteEl = document.querySelector('#character-quote');
    if (quoteEl) quoteEl.textContent = character.quote;

    // Буква на портрете
    const portrait = document.querySelector('.portrait-placeholder');
    if (portrait) portrait.textContent = character.name.charAt(0);

    // --- ОСНОВНАЯ ИНФОРМАЦИЯ (статы) ---

    const raceEl = document.querySelector('#character-race');
    if (raceEl) raceEl.textContent = character.race;

    const roleEl = document.querySelector('#character-role');
    if (roleEl) roleEl.textContent = character.role;

    const ageEl = document.querySelector('#character-age');
    if (ageEl) ageEl.textContent = character.age;

    const homelandEl = document.querySelector('#character-homeland');
    if (homelandEl) homelandEl.textContent = character.homeland;

    // --- ИСТОРИЯ ---

    const storyContainer = document.querySelector('#character-story');
    if (storyContainer) {
        storyContainer.innerHTML = character.story
            .map(paragraph => `<p>${paragraph}</p>`)
            .join('');
    }

    // --- СПОСОБНОСТИ ---

    const abilitiesContainer = document.querySelector('#abilities');
    if (abilitiesContainer) {
        abilitiesContainer.innerHTML = character.abilities
            .map(ability => `
                <article class="ability">
                    <div class="ability-icon">${ability.icon}</div>
                    <div>
                        <h3>${ability.name}</h3>
                        <p>${ability.description}</p>
                    </div>
                </article>
            `)
            .join('');
    }

    // --- СВЯЗИ ---

    const connectionsContainer = document.querySelector('#connections');
    if (connectionsContainer) {
        connectionsContainer.innerHTML = character.connections
            .map(connection => `
                <div class="connection">
                    <div class="connection-avatar">${connection.name.charAt(0)}</div>
                    <div>
                        <h3>${connection.name}</h3>
                        <p>${connection.description}</p>
                    </div>
                </div>
            `)
            .join('');
    }
}
