/* =========================================
   ДАННЫЕ ПЕРСОНАЖЕЙ
========================================= */

const characters = {

    eliana: {

        name: "Элиана",

        title: "Хранительница Света",

        quote: "Свет не требует власти. Он просто показывает путь.",

        race: "Эльф",

        role: "Целительница, Защитник",

        age: "248 лет",

        homeland: "Эллария",

        description:
            "Элиана — хранительница древнего света, чья судьба связана с равновесием мира. Добрая, мудрая и бесстрашная, она готова пожертвовать собой ради других.",

        story:
            "С детства Элиана чувствовала свет вокруг себя. Обучаясь в Храме Света, она узнала о своей миссии — защищать мир от надвигающейся тьмы. Но с каждым годом она всё больше понимает, что свет и тьма неразделимы.",

        abilities: [
            {
                name: "Свет исцеления",
                text: "Восстанавливает здоровье союзников.",
                icon: "✦"
            },
            {
                name: "Щит Света",
                text: "Создаёт защитный барьер.",
                icon: "◇"
            },
            {
                name: "Гнев Света",
                text: "Наносит мощный урон врагам.",
                icon: "✧"
            }
        ],

        connections: [
            {
                name: "Кайр",
                text: "Союзник, связанный общей тайной."
            },
            {
                name: "Дариен",
                text: "Человек, которому она не может полностью доверять."
            },
            {
                name: "Морвена",
                text: "Противостояние, которое длится много лет."
            }
        ]

    },

    darien: {

        name: "Дариен",

        title: "Тень Прошлого",

        quote: "Некоторые тайны лучше оставить в прошлом.",

        race: "Человек",

        role: "Воин, разведчик",

        age: "31 год",

        homeland: "Нордвелл",

        description:
            "Дариен — странник, скрывающий своё прошлое. Его имя связано с событиями Великой войны.",

        story:
            "Когда-то Дариен был частью королевской гвардии. После падения старого королевства он исчез и несколько лет провёл в изгнании.",

        abilities: [
            {
                name: "Теневой шаг",
                text: "Позволяет исчезнуть из поля зрения.",
                icon: "✦"
            },
            {
                name: "Последний удар",
                text: "Мощная атака против одного врага.",
                icon: "◇"
            },
            {
                name: "Инстинкт",
                text: "Позволяет замечать скрытые угрозы.",
                icon: "✧"
            }
        ],

        connections: [
            {
                name: "Элиана",
                text: "Неожиданный союзник."
            },
            {
                name: "Морвена",
                text: "Связь из далёкого прошлого."
            }
        ]

    },

    kair: {

        name: "Кайр",

        title: "Пожиратель Бурь",

        quote: "Молния всегда возвращается туда, где родилась.",

        race: "Неизвестно",

        role: "Маг",

        age: "Неизвестно",

        homeland: "Небесные земли",

        description:
            "Кайр способен управлять бурями и древней магией неба. О его прошлом известно крайне мало.",

        story:
            "Согласно легендам, Кайр появился во время первой великой бури. С тех пор он странствует между землями, разыскивая источник своей силы.",

        abilities: [
            {
                name: "Гнев бури",
                text: "Призывает разрушительную молнию.",
                icon: "✦"
            },
            {
                name: "Разряд",
                text: "Поражает несколько целей одновременно.",
                icon: "◇"
            },
            {
                name: "Взгляд небес",
                text: "Позволяет видеть происходящее далеко за пределами.",
                icon: "✧"
            }
        ],

        connections: [
            {


name: "Элиана",
                text: "Единственный человек, которому он доверяет."
            }
        ]

    },

    morvena: {

        name: "Морвена",

        title: "Шепчущая Тьма",

        quote: "Тьма не всегда означает зло.",

        race: "Неизвестно",

        role: "Колдунья",

        age: "Неизвестно",

        homeland: "Тенебрис",

        description:
            "Морвена владеет древней магией Тенебриса и знает тайны, которые были забыты остальными народами.",

        story:
            "Морвена появилась в Тенебрисе задолго до начала Великой войны. Некоторые считают её причиной катастрофы, другие — единственной, кто пытался её остановить.",

        abilities: [
            {
                name: "Шёпот Тьмы",
                text: "Позволяет управлять тенями.",
                icon: "✦"
            },
            {
                name: "Пелена",
                text: "Скрывает пространство от чужих глаз.",
                icon: "◇"
            },
            {
                name: "Бездна",
                text: "Призывает древнюю силу.",
                icon: "✧"
            }
        ],

        connections: [
            {
                name: "Элиана",
                text: "Главная противоположность Морвены."
            },
            {
                name: "Дариен",
                text: "Связаны событиями Великой войны."
            }
        ]

    }

};

/* =========================================
   ПОЛУЧАЕМ ID ПЕРСОНАЖА
========================================= */

const params = new URLSearchParams(
    window.location.search
);

const characterId =
    params.get("id") || "eliana";

const character =
    characters[characterId];

/* =========================================
   ЕСЛИ МЫ НА СТРАНИЦЕ ПЕРСОНАЖА
========================================= */

const characterContainer =
    document.getElementById("character");

if (characterContainer && character) {

    document.title =
        `LORA — ${character.name}`;

    characterContainer.innerHTML = `

        <section class="character-hero">

            <a
                href="index.html#characters"
                class="back-button"
            >
                ← Назад к персонажам
            </a>

            <div class="character-hero-image">

                <div class="character-portrait">
                    ${character.name.charAt(0)}
                </div>

            </div>

            <div class="character-hero-info">

                <span class="eyebrow">
                    ПЕРСОНАЖ
                </span>

                <h1>
                    ${character.name}
                </h1>

                <h2>
                    ${character.title}
                </h2>

                <p class="character-quote">
                    «${character.quote}»
                </p>

            </div>

        </section>

        <section class="character-content">

            <!-- ВКЛАДКИ -->

            <div class="tabs">

                <button
                    class="tab active"
                    data-tab="about"
                >
                    О персонаже
                </button>

                <button
                    class="tab"
                    data-tab="story"
                >
                    История
                </button>

                <button
                    class="tab"
                    data-tab="abilities"
                >
                    Способности
                </button>

                <button
                    class="tab"
                    data-tab="connections"
                >
                    Связи
                </button>

                <button
                    class="tab"
                    data-tab="gallery"
                >
                    Галерея
                </button>

            </div>

            <!-- О ПЕРСОНАЖЕ -->

            <div
                class="tab-content active"
                id="about"
            >

                <div class="content-heading">

                    <span class="section-number">
                        01
                    </span>

                    <h2>
                        О персонаже
                    </h2>

                </div>

                <p class="large-text">
                    ${character.description}
                </p>

                <div class="character-stats">

                    <div>
                        <span>Раса</span>
                        <strong>${character.race}</strong>
                    </div>

                    <div>
                        <span>Роль</span>
                        <strong>${character.role}</strong>
                    </div>

                    <div>
                        <span>Возраст</span>
                        <strong>${character.age}</strong>
                    </div>

                    <div>
                        <span>Родной мир</span>
                        <strong>${character.homeland}</strong>
                    </div>

                </div>

            </div>

            <!-- ИСТОРИЯ -->

            <div
                class="tab-content"
                id="story"
            >

                <div class="content-heading">

                    <span class="section-number">
                        02
                    </span>

                    <h2>
                        История
                    </h2>

                </div>

                <p class="story-text">
                    ${character.story}
                </p>

            </div>

            <!-- СПОСОБНОСТИ -->

            <div
                class="tab-content"
                id="abilities"
            >

                <div class="content-heading">

                    <span class="section-number">
                        03
                    </span>

                    <h2>
                        Способности
                    </h2>

                </div>

                <div class="abilities-grid">

                    ${character.abilities.map(
                        ability => `

                        <article class="ability-card">

                            <div class="ability-icon">
                                ${ability.icon}
                            </div>

                            <h3>
                                ${ability.name}
                            </h3>

                            <p>
                                ${ability.text}
                            </p>

                        </article>

                    `).join("")}

                </div>

            </div>

            <!-- СВЯЗИ -->

            <div
                class="tab-content"
                id="connections"
            >

                <div class="content-heading">

                    <span class="section-number">
                        04
                    </span>

                    <h2>
                        Связи
                    </h2>

                </div>

                <div class="connections-list">

                    ${character.connections.map(
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
                                    ${connection.text}
                                </p>
                            </div>

                        </div>

                    `).join("")}

                </div>

            </div>

            <!-- ГАЛЕРЕЯ -->

            <div
                class="tab-content"
                id="gallery"
            >

                <div class="content-heading">

                    <span class="section-number">
                        05
                    </span>

                    <h2> Галерея
                    </h2>

                </div>

                <div class="character-gallery">

                    <div>${character.name}</div>
                    <div>${character.title}</div>
                    <div>Портрет</div>
                    <div>История</div>

                </div>

            </div>

        </section>

    `;

    /* =====================================
       ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК
    ===================================== */

    const tabs =
        document.querySelectorAll(".tab");

    const contents =
        document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {

        tab.addEventListener(
            "click",
            () => {

                const target =
                    tab.dataset.tab;

                tabs.forEach(item => {
                    item.classList.remove(
                        "active"
                    );
                });

                contents.forEach(content => {
                    content.classList.remove(
                        "active"
                    );
                });

                tab.classList.add(
                    "active"
                );

                document
                    .getElementById(target)
                    .classList.add("active");

            }
        );

    });

}
