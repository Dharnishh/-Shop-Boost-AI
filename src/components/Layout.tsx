
import React from 'react';
import BottomNavigation from './BottomNavigation';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const showBottomNav = !location.pathname.startsWith('/onboarding');

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1 pb-20 overflow-y-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-4 animate-fade-in">
          {children}
        </div>
      </main>
      {showBottomNav && <BottomNavigation />}
    </div>
  );
};

export default Layout;
