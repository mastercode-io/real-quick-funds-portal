import React from 'react';
import styles from '../../styles/components/Layout.module.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
};