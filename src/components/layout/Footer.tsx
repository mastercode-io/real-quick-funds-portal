import React from 'react';
import { Container } from './Container';
import styles from '../../styles/components/Layout.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div style={{ textAlign: 'center' }}>
          <p>&copy; 2025 Real Quick Funds, LLC. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};