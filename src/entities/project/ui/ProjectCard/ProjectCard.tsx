import React from 'react';
import styles from './ProjectCard.module.scss';
import { ArrowIcon, getPositionColor } from 'shared';
import { TProject } from 'entities/project/model/types';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
    project: TProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/projects/${project.id}`);
    };

    return (
        <div className={styles.card} onClick={handleClick}>
            <div className={styles.info}>
                <span className={styles.company}>{project.company}</span>
                <span className={styles.position} style={{ backgroundColor: getPositionColor(project.position) }}>
                    {project.position}
                </span>
            </div>
            <h3 className={styles.title}>{project.title}</h3>
            <h5 className={styles.description}>{project.description}</h5>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>
                    <ArrowIcon />
                </button>
            </div>
        </div>
    );
};
