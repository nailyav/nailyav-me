import React from 'react';
import styles from './AppPage.module.scss';
import { ArrowIcon, FloatingFlowers } from 'shared';
import { useNavigate, useParams } from 'react-router-dom';
import { apps } from 'entities';
import { appComponents } from 'entities';

export const AppPage: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const app = apps.find((app) => app.id === id);

    const handleBack = () => {
        navigate('/#mini-apps');
    };

    if (app) {
        return (
            <div className={styles.body}>
                <FloatingFlowers variant="soft" />
                <button className={styles.back} onClick={handleBack}>
                    <ArrowIcon style={{ transform: 'rotate(180deg)' }} />{' '}
                    <span className={styles.backText}>Вернуться обратно</span>
                </button>
                {/* <div className={styles.infoContainer}>
                    <div className={styles.title}>{app.title}</div>
                    <div className={styles.description}>{app.description}</div>
                </div> */}
                {appComponents[app.id]}
            </div>
        );
    }
    return <div>Sorry page does not exist!</div>;
};
