/**
 * это короче штука с вариантом появления рядом с контактом иконки копирования и ты на нее нажимаешь а не на текст
 * но тут надо все контакты такими сделать тогда (тг и ватсап - иконка link)
 */

import React, { useState } from 'react';
import styles from './ContactsSection.module.scss';
import { EmailIcon, ArrowTooltip, CopyIcon, PhoneIcon, TelegramIcon, LinkIcon, WhatsappIcon } from 'shared';

export const ContactsSection: React.FC = () => {
    const [copiedKey, setCopiedKey] = useState<string | null>(null);
    const [copyVisibleKey, setCopyVisibleKey] = useState<string | null>(null);

    const handleCopy = async (text: string, key: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedKey(key);

            setTimeout(() => {
                setCopiedKey((prev) => (prev === key ? null : prev));
            }, 1500);
        } catch (error) {
            console.error('Copy failed:', error);
        }
    };

    const handleMouseEnter = (text: string) => {
        setCopyVisibleKey(text);
    };

    const handleMouseLeave = () => {
        setCopyVisibleKey(null);
    };

    return (
        <section id="contacts" className={styles.section}>
            <h1>Контакты 🎀</h1>
            <h2>Если у вас остались вопросы или вам интересно сотрудничество, пишите 🤙</h2>
            <ul style={{ padding: 0, marginTop: '50px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li className={styles.listItem}>
                    <EmailIcon />
                    <button
                        onClick={() => handleCopy('nailyavaliull1409@gmail.com', 'email')}
                        onMouseEnter={() => handleMouseEnter('email')}
                        onMouseLeave={handleMouseLeave}
                        className={styles.clickable}
                    >
                        nailyavaliull1409@gmail.com
                    </button>
                    {copyVisibleKey === 'email' && (
                        <ArrowTooltip isOpen={copiedKey === 'email'}>
                            <CopyIcon />
                        </ArrowTooltip>
                    )}
                </li>
                <li className={styles.listItem}>
                    <PhoneIcon />
                    <button
                        onClick={() => handleCopy('+7 (987) 221-72-85', 'phone')}
                        onMouseEnter={() => handleMouseEnter('phone')}
                        onMouseLeave={handleMouseLeave}
                        className={styles.clickable}
                    >
                        +7 (987) 221-72-85
                    </button>
                    {copyVisibleKey === 'phone' && (
                        <ArrowTooltip isOpen={copiedKey === 'phone'}>
                            <CopyIcon />
                        </ArrowTooltip>
                    )}
                </li>
                <li className={styles.listItem}>
                    <TelegramIcon />
                    <a
                        href="https://t.me/nailyavv"
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => handleMouseEnter('telegram')}
                        onMouseLeave={handleMouseLeave}
                        className={styles.clickable}
                    >
                        @nailyavv
                    </a>
                    {copyVisibleKey === 'telegram' && <LinkIcon />}
                </li>
                <li className={styles.listItem}>
                    <WhatsappIcon />
                    <a
                        href="https://wa.me/79872217285"
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => handleMouseEnter('whatsapp')}
                        onMouseLeave={handleMouseLeave}
                        className={styles.clickable}
                    >
                        +7 (987) 221-72-85
                    </a>
                    {copyVisibleKey === 'whatsapp' && <LinkIcon />}
                </li>
            </ul>
        </section>
    );
};
