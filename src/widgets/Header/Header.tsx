import React, { useEffect, useState } from 'react';
import { HeaderNavLink } from 'shared';
import styles from './Header.module.scss';
import { useLocation } from 'react-router-dom';

const sectionIds = ['top', 'projects', 'mini-apps', 'contacts'];

export const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState('top');
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    useEffect(() => {
        if (!isHomePage) return;

        const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter((entry) => entry.isIntersecting);

                if (!visibleEntries.length) return;

                const current = visibleEntries.sort(
                    (a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
                )[0];

                if (current) {
                    setActiveSection(current.target.id);
                }
            },
            {
                threshold: 0.15,
                rootMargin: '-80px 0px -25% 0px',
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, [isHomePage]);

    return (
        <div className={styles.header}>
            <HeaderNavLink name="Обо мне" to="/#about" isActive={activeSection === 'top'} />
            <HeaderNavLink name="Проекты" to="/#projects" isActive={activeSection === 'projects'} />
            <HeaderNavLink name="Мини приложения" to="/#mini-apps" isActive={activeSection === 'mini-apps'} />
            <HeaderNavLink name="Контакты" to="/#contacts" isActive={activeSection === 'contacts'} />
        </div>
    );
};
