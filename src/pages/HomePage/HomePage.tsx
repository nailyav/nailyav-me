import React, { useEffect } from 'react';
import styles from './HomePage.module.scss';
import { ContactsSection, HeroSection, MiniAppsSection, ProjectsSection } from 'widgets';
import { useLocation } from 'react-router-dom';

export const HomePage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const id = location.hash.slice(1);
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [location.hash]);
    
    return (
        <>
            <HeroSection />
            <ProjectsSection />
            <MiniAppsSection />
            <ContactsSection />
        </>
    );
};
