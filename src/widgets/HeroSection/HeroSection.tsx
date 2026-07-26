import React from 'react';
import styles from './HeroSection.module.scss';
import { FloatingFlowers, HeaderNavLink } from 'shared';

const skillList = [
    'JavaScript',
    'TypeScript',
    'React',
    'Zustand',
    'Redux',
    'Axios',
    'Docker',
    'Git',
    'Python',
    'Linux',
];

export const HeroSection: React.FC = () => {
    return (
        <section className={styles.hero} id="top">
            <FloatingFlowers variant="hero" />

            <div className={styles.textBlock}>
                <h1 className={styles.h1}>Привет! Я Наиля 🌸</h1>
                <div className={styles.info}>
                    <h2>
                        <span className={styles.marker}>Frontend-разработчик</span>{' '}с 3+ годами опыта в сфере и сильным
                        бэкграундом в корпоративной разработке.
                    </h2>
                    <h2>Имею опыт работы на всех этапах цикла разработки динамических веб-проектов.</h2>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <HeaderNavLink name="Свяжитесь со мной!" to="/#contacts" className={styles.buttonPrimary} />

                <a
                    href="/Nailya_Frontend_Resume.pdf"
                    download="Nailya_Frontend_Resume.pdf"
                    className={styles.buttonSecondary}
                >
                    Скачать резюме
                </a>
            </div>

            <div className={styles.list}>
                {skillList.map((skill) => (
                    <h3 key={skill}>{skill}</h3>
                ))}
            </div>
        </section>
    );
};
