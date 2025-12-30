import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Layout({ children, currentPageName }) {
  const noFooterPages = ['Cart', 'Checkout'];
  const showFooter = !noFooterPages.includes(currentPageName);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        :root {
          --color-ocean: #0A2647;
          --color-deep: #144272;
          --color-wave: #205295;
          --color-neon: #00F5D4;
          --color-white: #FFFFFF;
        }
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #00F5D4 0%, #00BBF9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #0A2647 0%, #144272 50%, #205295 100%);
        }
        
        .glow-neon {
          box-shadow: 0 0 40px rgba(0, 245, 212, 0.3);
        }
      `}</style>
      
      <Header />
      <main>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
