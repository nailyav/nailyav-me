import React, { useEffect, useMemo, useState } from 'react';
import styles from './WorkTimerApp.module.scss';

type TimerStatus = 'idle' | 'running' | 'paused';

export const WorkTimerApp: React.FC = () => {
    const [seconds, setSeconds] = useState(0);
    const [status, setStatus] = useState<TimerStatus>('idle');
    const [lastSession, setLastSession] = useState<number | null>(null);

    useEffect(() => {
        if (status !== 'running') {
            return;
        }

        const interval = window.setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => {
            window.clearInterval(interval);
        };
    }, [status]);

    const formatTime = (value: number) => {
        const hours = Math.floor(value / 3600);
        const minutes = Math.floor((value % 3600) / 60);
        const secs = value % 60;

        const pad = (num: number) => String(num).padStart(2, '0');

        return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
    };

    const formattedTime = useMemo(() => formatTime(seconds), [seconds]);

    const workedMinutes = useMemo(() => Math.floor(seconds / 60), [seconds]);

    const handleStart = () => {
        setLastSession(null);
        setStatus('running');
    };

    const handlePause = () => {
        setStatus('paused');
    };

    const handleResume = () => {
        setStatus('running');
    };

    const handleFinish = () => {
        setLastSession(seconds);
        setStatus('idle');
        setSeconds(0);
    };

    return (
        <div className={styles.timerCard}>
            <div className={styles.badge}>
                {status === 'idle' && '🌸 Готов к работе'}
                {status === 'running' && '💻 Идёт работа'}
                {status === 'paused' && '☕ Пауза'}
            </div>

            <h2 className={styles.title}>Work Time Tracker</h2>
            <p className={styles.subtitle}>Запусти таймер и отслеживай, сколько времени ты уже в работе.</p>

            <div className={styles.clock}>
                <span>{formattedTime}</span>
            </div>

            <div className={styles.stats}>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>Минут в работе</span>
                    <span className={styles.statValue}>{workedMinutes}</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statLabel}>Статус</span>
                    <span className={styles.statValue}>
                        {status === 'idle' && 'Не начато'}
                        {status === 'running' && 'Работаю'}
                        {status === 'paused' && 'На паузе'}
                    </span>
                </div>
            </div>

            {lastSession !== null && (
                <div className={styles.sessionResult}>
                    <span className={styles.sessionTitle}>Последняя сессия</span>
                    <span className={styles.sessionTime}>{formatTime(lastSession)}</span>
                </div>
            )}

            <div className={styles.actions}>
                {status === 'idle' && (
                    <button type="button" className={`${styles.button} ${styles.primary}`} onClick={handleStart}>
                        Старт
                    </button>
                )}

                {status === 'running' && (
                    <>
                        <button type="button" className={`${styles.button} ${styles.secondary}`} onClick={handlePause}>
                            Пауза
                        </button>
                        <button type="button" className={`${styles.button} ${styles.ghost}`} onClick={handleFinish}>
                            Завершить
                        </button>
                    </>
                )}

                {status === 'paused' && (
                    <>
                        <button type="button" className={`${styles.button} ${styles.primary}`} onClick={handleResume}>
                            Продолжить
                        </button>
                        <button type="button" className={`${styles.button} ${styles.ghost}`} onClick={handleFinish}>
                            Завершить
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};
