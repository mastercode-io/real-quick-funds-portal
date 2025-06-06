import React from 'react';
import { Container } from './Container';
import styles from '../../styles/components/Layout.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img 
            src="/logo.png" 
            alt="Real Quick Funds" 
            className={styles.logo}
          />
          <nav>
            {/* Navigation items will go here if needed */}
          </nav>
        </div>
      </Container>
    </header>
  );
};