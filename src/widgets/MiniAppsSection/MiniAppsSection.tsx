import React from 'react';
import styles from './MiniAppsSection.module.scss';
import { AppCard, apps } from 'entities';

export const MiniAppsSection: React.FC = () => {
    return (
        <section id="mini-apps" className={styles.section}>
            <h1>Мини приложения 💩</h1>
            <div className={styles.container}>
                {apps.map((app) => (
                    <AppCard app={app} />
                ))}
            </div>
        </section>
    );
};
