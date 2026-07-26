import type { TProject } from './types';

export const projects: TProject[] = [
    {
        id: 'kamotive',
        title: 'Kamotive',
        company: 'ИЦ “Камаз”',
        position: 'Фронтенд-разработчик',
        // Kamotive is a PLM platform designed for industrial project management. It helps organizations plan and organize workflows, monitor task progress in real time, automate reporting, and enable collaboration between developers and suppliers throughout the product development process.
        description:
            `Kamotive — PLM-платформа для управления промышленными проектами, которая помогает организациям планировать и выстраивать рабочие процессы, отслеживать прогресс задач в реальном времени, автоматизировать формирование отчетов и обеспечивать эффективное взаимодействие между разработчиками и поставщиками.`,
        extendedDescription: 
            `Работала над PLM-платформой Kamotive. Разработала микросервис "Документы" с использованием React и HtmlWebpackPlugin, включая полный цикл от проектирования дизайна до внедрения в продакшн. Создала дизайн для 7 модулей платформы, включая модуль "Документы", обеспечив единообразие пользовательского интерфейса и улучшение UX.
            
            Участвовала в разработке корпоративной библиотеки компонентов "kamotive_ui": спроектировала дизайн всех компонентов библиотеки, разработала и внедрила новые компоненты: List, Checkbox, Tooltip, Comment, TextEditor, доработала существующие компоненты для повышения функциональности и переиспользуемости. Выполняла задачи, стабильно соблюдая сроки и поддерживая качество merge request на уровне 95%+.`,
        stack: [
            'React',
            'Typescript',
            'SCSS',
            'Zustand/Redux',
            'Valibot',
            'Axios',
            'Webpack',
            'Jest',
            'ESLint/Prettier',
        ],
        dates: 'Май, 2024 - Декабрь, 2025',
    },
    {
        id: 'innometrics-dashboard',
        title: 'Innometrics Dashboard',
        company: 'Innopolis University',
        position: 'Фронтенд-разработчик',
        description:
            `Веб-приложение для коллекционирования и отображения данных, собранных с ПК пользователя неинвазивным путем. Legacy проект, требующий рефакторинга кода, обновления пакетов и оптимизации процесса разработки.`,
        extendedDescription: 
            `Веб-приложение для коллекционирования и отображения данных, собранных с ПК пользователя неинвазивным путем. Legacy проект, требующий рефакторинга кода, обновления пакетов и оптимизации процесса разработки. 
            
            Я отрефакторила функциональные компоненты на основе улучшенного дизайна для более чем 20 страниц сложной архитектуры, активно взаимодействующих с бэкендом с помощью вызовов API, частично отрефакторила устаревший код, а также внедрила CI/CD с добавлением end-to-end тестов, проверкой линтера и дальнейшим деплоем в Yandex Cloud.`,
        stack: [
            'React',
            'JavaScript',
            'Sass',
            'Redux',
            'Webpack',
            'GitHub Actions',
            'Docker',
            'Cypress',
            'ESLint',
        ],
        dates: 'Ноябрь, 2022 - Июнь, 2023',
    },
    {
        id: 'kolorz-art',
        title: 'Kolorz.art',
        company: 'Innopolis University',
        position: 'Фронтенд-разработчик',
        description:
            `Рабочее веб-приложение для создания эстетичных цветовых палитр. Совместно с членами команды я создала удобный интерфейс в различных форматах с помощью Figma и реализовала главную страницу, написанную на HTML/CSS и React.`,
        extendedDescription: 
            `Рабочее веб-приложение для создания эстетичных цветовых палитр. Совместно с членами команды я создала удобный интерфейс в различных форматах с помощью Figma и реализовала главную страницу, написанную на HTML/CSS и React.`,
        stack: [
            'React',
            'JavaSript',
            'HTML',
            'CSS',
            'Figma',
        ],
        dates: '',
    },
    {
        id: 'documents-recognition-service',
        title: 'Documents recognition service',
        company: 'Innopolis University',
        position: 'Фронтенд-разработчик',
        description:
            `Веб-приложение, написанное с использованием HTML, CSS и JavaScript для преобразования фотографий документов в файлы PDF с распознаванием текста: я создала удобный дизайн с помощью Figma и реализовала его. Активно сотрудничала с backend-разработчиками и продакт-менеджерами.`,
        extendedDescription: 
            `Веб-приложение, написанное с использованием HTML, CSS и JavaScript для преобразования фотографий документов в файлы PDF с распознаванием текста: я создала удобный дизайн с помощью Figma и реализовала его. Активно сотрудничала с backend-разработчиками и продакт-менеджерами.`,
        stack: [
            'JavaSript',
            'HTML',
            'CSS',
        ],
        dates: '',
    },
    {
        id: 'digital-ibrary',
        title: 'Digital Library',
        company: 'Innopolis University',
        position: 'Фронтенд-разработчик',
        description:
            `Веб-приложение с использованием HTML и CSS: я создала и реализовала дизайн страниц входа и регистрации, а также некоторых основных блоков домашней страницы.`,
        extendedDescription: 
            `Веб-приложение с использованием HTML и CSS: я создала и реализовала дизайн страниц входа и регистрации, а также некоторых основных блоков домашней страницы.`,
        stack: [
            'JavaSript',
            'HTML',
            'CSS',
        ],
        dates: '',
    },
    {
        id: 'notifier',
        title: 'Notifier',
        company: 'Innopolis University',
        position: 'Android-разработчик',
        description:
            `Приложение на Android для отслеживания срока годности продуктов, которое уведомляет пользователя об истечении срока годности. Проект разработан без бэкенда, для хранения данных использовался sqflite. Также я использовала http для получения данных со стороннего API. Для контроля качества я внедрила CI в GitHub Actions с unit и integration тестами, а также проверкой линтера. Приложение работает на трех языках.`,
        extendedDescription: 
            `Приложение на Android для отслеживания срока годности продуктов, которое уведомляет пользователя об истечении срока  годности. Проект разработан без бэкенда, для хранения данных использовался sqflite. Также я использовала http для получения данных со стороннего API. Для контроля качества я внедрила CI в GitHub Actions с unit и integration тестами, а также проверкой линтера. Приложение работает на трех языках.`,
        stack: [
            'Flutter Dart',
            'Riverpod',
            'http',
            'GitHub Actions',
            'flutter_localizations',
            'test + mockito',
            'flutter_lints',
        ],
        dates: '',
    },
    {
        id: 'indie-gamedev',
        title: 'Indie GameDev',
        company: 'Indie GameDev',
        position: 'UX/UI дизайнер',
        description:
            `Независимая мобильная игрв, которая в настоящее время доступна на рынке и популярна среди детей и подростков. Я создала дружественный пользовательский интерфейс с помощью Adobe Illustrator с небольшим использованием Adobe Photoshop. Успешно работала в команде с людьми разной профессии.`,
        extendedDescription: 
            `Работала над независимой мобильной игрой, которая в настоящее время доступна на рынке и популярна среди детей и подростков. Я создала дружественный пользовательский интерфейс с помощью Adobe Illustrator с небольшим использованием Adobe Photoshop. Успешно работала в команде с людьми разной профессии.`,
        stack: [
            'Adobe Photoshop',
            'Adobe Illustrator',
        ],
        dates: 'Июнь - Август, 2021',
    },
];
