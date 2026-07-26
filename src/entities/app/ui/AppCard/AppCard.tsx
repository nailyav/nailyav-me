import React from 'react';
import styles from './AppCard.module.scss';
import { ArrowIcon } from 'shared';
import { useNavigate } from 'react-router-dom';
import { TApp } from 'entities';

interface AppCardProps {
    app: TApp;
}

export const AppCard: React.FC<AppCardProps> = ({ app }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/apps/${app.id}`);
    };

    return (
        <div className={styles.card} onClick={handleClick}>
            <h3 className={styles.title}>{app.title}</h3>
            <h5 className={styles.description}>{app.description}</h5>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>
                    <ArrowIcon />
                </button>
            </div>
        </div>
    );
};
