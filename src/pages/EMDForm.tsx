import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';

export const EMDForm: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Container>
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            paddingTop: 'var(--spacing-xl)',
            textAlign: 'center'
          }}>
            <img 
              src="/logo.png" 
              alt="Real Quick Funds" 
              style={{ height: '60px', marginBottom: 'var(--spacing-lg)' }}
            />
            <h1>EMD Request Form</h1>
            <p>Form implementation coming in Phase 2...</p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};