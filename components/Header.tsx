import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  activePage: Page;
  setActivePage: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, activePage, setActivePage, children }) => {
  const isActive = activePage === page;
  return (
    <button
      onClick={() => setActivePage(page)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'bg-brand-accent text-brand-dark'
          : 'text-brand-text hover:bg-brand-secondary hover:text-brand-light'
      }`}
    >
      {children}
    </button>
  );
};


const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-lg shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
             <button onClick={() => setActivePage('home')} className="text-xl font-bold font-display text-brand-light">CEED 2026 Prep Guide</button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink page="home" activePage={activePage} setActivePage={setActivePage}>Home</NavLink>
              <NavLink page="plan" activePage={activePage} setActivePage={setActivePage}>Daily Plan</NavLink>
              <NavLink page="syllabus" activePage={activePage} setActivePage={setActivePage}>Syllabus</NavLink>
              <NavLink page="resources" activePage={activePage} setActivePage={setActivePage}>Resources</NavLink>
              <NavLink page="portfolio" activePage={activePage} setActivePage={setActivePage}>Portfolio Prep</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
