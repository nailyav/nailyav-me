import { TPosition } from 'entities';

const positions: Record<string, string> = {
    'Фронтенд-разработчик': 'var(--cyan)',
    'Android-разработчик': 'var(--green)',
    'UX/UI дизайнер': 'var(--yellow)',
};

export const getPositionColor = (position: TPosition) => {
    return positions[position];
};
