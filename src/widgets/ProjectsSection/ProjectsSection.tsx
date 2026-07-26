import React from 'react';
import styles from './ProjectsSection.module.scss';
import { ProjectCard, projects } from 'entities';

export const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className={styles.section}>
            <h1>Мои проекты 🔮</h1>
            <div className={styles.container}>
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </section>
    );
};
