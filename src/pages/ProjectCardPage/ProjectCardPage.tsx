import React from 'react';
import styles from './ProjectCardPage.module.scss';
import { ArrowIcon, getPositionColor } from 'shared';
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from 'entities';

export const ProjectCardPage: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const project = projects.find((project) => project.id === id);

    const handleBack = () => {
        navigate('/#projects');
    };

    if (project) {
        return (
            <div className={styles.body}>
                <button className={styles.back} onClick={handleBack}>
                    <ArrowIcon style={{ transform: 'rotate(180deg)' }} />{' '}
                    <span className={styles.backText}>Вернуться к проектам</span>
                </button>
                <div className={styles.infoContainer}>
                    <div className={styles.company}>{project.company}</div>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>{project.title}</div>
                        <div
                            className={styles.position}
                            style={{ backgroundColor: getPositionColor(project.position) }}
                        >
                            {project.position}
                        </div>
                    </div>
                    <div className={styles.dates}>{project.dates}</div>
                </div>

                <div className={styles.description}>{project.extendedDescription}</div>
            </div>
        );
    }
    return <div>Sorry page does not exist!</div>;
};
