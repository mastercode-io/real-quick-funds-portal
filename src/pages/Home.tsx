import React, { useEffect } from 'react';

export const Home: React.FC = () => {
  useEffect(() => {
    // Redirect to main website
    window.location.href = 'https://realquickfunds.com';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h2>Redirecting to Real Quick Funds...</h2>
      <p>If you are not redirected automatically, <a href="https://realquickfunds.com">click here</a>.</p>
    </div>
  );
};