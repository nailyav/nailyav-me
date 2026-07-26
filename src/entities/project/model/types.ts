export type TProject = {
    id: string;
    title: string;
    company: string;
    description: string;
    extendedDescription: string;
    stack: string[];
    position: TPosition;
    dates: string;
}

export type TPosition = 'Фронтенд-разработчик' | 'Android-разработчик' | 'UX/UI дизайнер';