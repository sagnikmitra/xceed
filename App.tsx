import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import DailyPlan from './components/DailyPlan';
import Resources from './components/Resources';
import Syllabus from './components/Syllabus';
import Portfolio from './components/Portfolio';
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'plan':
        return <DailyPlan />;
      case 'resources':
        return <Resources />;
      case 'syllabus':
        return <Syllabus />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-dark font-sans text-brand-text">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {renderPage()}
      </main>
      <footer className="text-center py-6 text-brand-subtle font-display">
        <p>&copy; {new Date().getFullYear()} CEED 2026 Prep Guide. Your journey to M.Des starts now.</p>
      </footer>
      {showScrollTop && (
         <button
          onClick={scrollTop}
          className="fixed bottom-8 right-8 bg-brand-accent text-brand-dark p-3 rounded-full shadow-lg hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-accent transition-opacity duration-300"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;
