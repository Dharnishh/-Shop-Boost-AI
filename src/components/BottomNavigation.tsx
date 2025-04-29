
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Settings, BarChart, Wrench, Plus } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-secondary border-t border-border flex items-center justify-around px-2 z-50">
      <Link 
        to="/" 
        className={`flex flex-col items-center justify-center w-16 pt-1 ${isActive('/') ? 'text-neon-purple text-glow' : 'text-muted-foreground'}`}
      >
        <Home size={24} />
        <span className="text-xs mt-0.5">{t('home')}</span>
      </Link>

      <Link 
        to="/ai-tools" 
        className={`flex flex-col items-center justify-center w-16 pt-1 ${isActive('/ai-tools') ? 'text-neon-purple text-glow' : 'text-muted-foreground'}`}
      >
        <Wrench size={24} />
        <span className="text-xs mt-0.5">{t('aiTools')}</span>
      </Link>

      <Link 
        to="/create-post" 
        className="flex flex-col items-center justify-center"
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center btn-glow-pink -mt-5">
          <Plus size={30} color="white" />
        </div>
      </Link>

      <Link 
        to="/analytics" 
        className={`flex flex-col items-center justify-center w-16 pt-1 ${isActive('/analytics') ? 'text-neon-purple text-glow' : 'text-muted-foreground'}`}
      >
        <BarChart size={24} />
        <span className="text-xs mt-0.5">{t('analytics')}</span>
      </Link>

      <Link 
        to="/settings" 
        className={`flex flex-col items-center justify-center w-16 pt-1 ${isActive('/settings') ? 'text-neon-purple text-glow' : 'text-muted-foreground'}`}
      >
        <Settings size={24} />
        <span className="text-xs mt-0.5">{t('settings')}</span>
      </Link>
    </div>
  );
};

export default BottomNavigation;
