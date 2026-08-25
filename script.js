/* =========================================
   ПЕРСОНАЖИ
========================================= */

const characters = {

    eliana: {

        name: "Элиана",

        title: "Хранительница Света",

        description:
            "Элиана — хранительница древнего света, чья судьба связана с равновесием мира. Добрая, мудрая и бесстрашная, она готова пожертвовать собой ради других.",

        quote:
            "Свет не требует власти. Он просто показывает путь.",

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
                description:
                    "Восстанавливает здоровье союзников и снимает последствия тёмной магии.",
                icon: "✦"
            },

            {
                name: "Щит Света",
                description:
                    "Создаёт защитный барьер, способный выдержать сильнейшие атаки.",
                icon: "◇"
            },

            {
                name: "Гнев Света",
                description:
                    "Высвобождает накопленную энергию света и поражает врагов.",
                icon: "✧"
            }

        ],

        connections: [

            {
                name: "Кайр",
                description:
                    "Союзник, связанный с Элианой древней тайной."
            },

            {
                name: "Дариен",
                description:
                    "Человек, которому Элиана не может полностью доверять."
            },

            {
                name: "Морвена",
                description:
                    "Главная противоположность и одна из самых старых угроз."
            }

        ]

    },

    darien: {

        name: "Дариен",

        title: "Тень Прошлого",

        description:
            "Странник, скрывающий своё прошлое. Его имя связано с событиями Великой войны.",

        quote:
            "Некоторые тайны лучше оставить в прошлом.",

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
                description:
                    "Позволяет исчезнуть из поля зрения противника.",
                icon: "✦"
            },

            {
                name: "Последний удар",
                description:
                    "Мощная атака против одной цели.",
                icon: "◇"
            },

            {
                name: "Инстинкт",
                description:
                    "Позволяет чувствовать скрытые угрозы.",
                icon: "✧"
            }

        ],

        connections: [

            {
                name: "Элиана",
                description:
                    "Неожиданный союзник."
            },

            {
                name: "Морвена",
                description:
                    "Связь из далёкого прошлого."
            }

        ]

    },

    kair: {

        name: "Кайр",

        title: "Пожиратель Бурь",

        description:
            "Таинственный странник, способный управлять древней магией неба.",

        quote:
            "Молния всегда возвращается туда, где родилась.",

        race: "Неизвестно",

        role: "Маг",

        age: "Неизвестно",

        homeland: "Небесные земли",

        story: [
            "Кайр появился во время первой великой бури.",
            "С тех пор он странствует между землями.",
            "


Он пытается найти источник собственной силы."
        ],

        abilities: [

            {
                name: "Гнев бури",
                description:
                    "Призывает разрушительную молнию.",
                icon: "✦"
            },

            {
                name: "Разряд",
                description:
                    "Поражает несколько целей одновременно.",
                icon: "◇"
            },

            {
                name: "Взгляд небес",
                description:
                    "Позволяет видеть происходящее далеко за пределами.",
                icon: "✧"
            }

        ],

        connections: [

            {
                name: "Элиана",
                description:
                    "Единственный человек, которому Кайр доверяет."
            }

        ]

    },

    morvena: {

        name: "Морвена",

        title: "Шепчущая Тьма",

        description:
            "Хозяйка древней магии Тенебриса, знающая тайны, забытые остальными народами.",

        quote:
            "Тьма не всегда означает зло.",

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
                description:
                    "Позволяет управлять тенями.",
                icon: "✦"
            },

            {
                name: "Пелена",
                description:
                    "Скрывает пространство от чужих глаз.",
                icon: "◇"
            },

            {
                name: "Бездна",
                description:
                    "Призывает древнюю силу Тенебриса.",
                icon: "✧"
            }

        ],

        connections: [

            {
                name: "Элиана",
                description:
                    "Главная противоположность Морвены."
            },

            {
                name: "Дариен",
                description:
                    "Связаны событиями Великой войны."
            }

        ]

    }

};

/* =========================================
   ПОЛУЧАЕМ ПЕРСОНАЖА ИЗ URL
========================================= */

const params =
    new URLSearchParams(
        window.location.search
    );

const characterId =
    params.get("id") || "eliana";

const character =
    characters[characterId];

/* =========================================
   ЗАГРУЗКА ПЕРСОНАЖА
========================================= */

if (
    character &&
    document.querySelector(".character-page")
) {

    document.title =
        `LORA — ${character.name}`;

    /* ЛЕВАЯ ЧАСТЬ */

    document.querySelector(
        "#character-name"
    ).textContent =
        character.name;

    document.querySelector(
        "#character-title"
    ).textContent =
        character.title;

    document.querySelector(
        "#character-description"
    ).textContent =
        character.description;

    document.querySelector(
        "#character-quote"
    ).textContent =
        character.quote;

    /* ОСНОВНАЯ ИНФОРМАЦИЯ */

    document.querySelector(
        "#character-race"
    ).textContent =
        character.race;

    document.querySelector(
        "#character-role"
    ).textContent =
        character.role;

    document.querySelector(
        "#character-age"
    ).textContent =
        character.age;

    document.querySelector(
        "#character-homeland"
    ).textContent =
        character.homeland;

    /* ИСТОРИЯ */

    const story =
        document.querySelector(
            "#character-story"
        );

    story.innerHTML =
        character.story
            .map(
                paragraph =>
                    `<p>${paragraph}</p>`
            )
            .join("");

    /* СПОСОБНОСТИ */

    const abilities =document.querySelector(
            "#abilities"
        );

    abilities.innerHTML =
        character.abilities
            .map(
                ability => `

                <article class="ability">

                    <div class="ability-icon">
                        ${ability.icon}
                    </div>

                    <div>

                        <h3>
                            ${ability.name}
                        </h3>

                        <p>
                            ${ability.description}
                        </p>

                    </div>

                </article>

            `
            )
            .join("");

    /* СВЯЗИ */

    const connections =
        document.querySelector(
            "#connections"
        );

    connections.innerHTML =
        character.connections
            .map(
                connection => `

                <div class="connection">

                    <div class="connection-avatar">
                        ${connection.name.charAt(0)}
                    </div>

                    <div>

                        <h3>
                            ${connection.name}
                        </h3>

                        <p>
                            ${connection.description}
                        </p>

                    </div>

                </div>

            `
            )
            .join("");

    /* БУКВА НА ПОРТРЕТЕ */

    document.querySelector(
        ".portrait-placeholder"
    ).textContent =
        character.name.charAt(0);

}
