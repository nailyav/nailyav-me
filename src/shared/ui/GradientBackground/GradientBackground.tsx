import React, { useEffect } from 'react';
import './GradientBackground.scss';

export const GradientBackground: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('animated-gradient-bg');

    return () => {
      document.body.classList.remove('animated-gradient-bg');
    };
  }, []);

  return null;
};
