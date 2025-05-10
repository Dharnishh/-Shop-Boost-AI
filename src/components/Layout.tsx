
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
  const currentPath = location.pathname.split('/')[1] || 'home';
  
  // Get the page title based on the current path
  const getPageTitle = () => {
    switch(currentPath) {
      case 'home':
        return 'Dashboard';
      case 'ai-tools':
        return 'AI Tools';
      case 'analytics':
        return 'Analytics';
      case 'settings':
        return 'Settings';
      default:
        return 'ShopBoost AI';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {!isLandingPage && (
        <header className="pt-4 pb-3 px-5 bg-background/90 backdrop-blur-lg sticky top-0 z-40">
          <div className="max-w-md mx-auto flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">{getPageTitle()}</h1>
              {currentPath === 'home' && (
                <p className="text-sm text-muted-foreground">Hello, there!</p>
              )}
            </div>
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-lg font-medium text-neon-purple">U</span>
            </div>
          </div>
        </header>
      )}
      
      <main className={`flex-1 ${showBottomNav ? 'pb-24' : ''} overflow-y-auto`}>
        <div className={`${isLandingPage ? '' : 'max-w-md mx-auto px-5'} animate-fade-in`}>
          {children}
        </div>
      </main>
      
      {showBottomNav && <BottomNavigation />}
    </div>
  );
};

export default Layout;
