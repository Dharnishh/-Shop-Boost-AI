
import React from 'react';
import BottomNavigation from './BottomNavigation';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const showBottomNav = !location.pathname.startsWith('/onboarding') && !isLandingPage;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {!isLandingPage && (
        <header className="py-4 px-6 bg-background/80 backdrop-blur-lg border-b border-accent/10 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              ShopBoost AI
            </div>
          </div>
        </header>
      )}
      
      <main className={`flex-1 ${showBottomNav ? 'pb-20' : ''} overflow-y-auto`}>
        <div className={`${isLandingPage ? '' : 'max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-4'} animate-fade-in`}>
          {children}
        </div>
      </main>
      
      {showBottomNav && <BottomNavigation />}
    </div>
  );
};

export default Layout;
