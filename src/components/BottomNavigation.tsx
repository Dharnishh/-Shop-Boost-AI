
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Wand2, BarChart2, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNavigation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { 
      path: '/home', 
      label: t('home'), 
      icon: Home 
    },
    { 
      path: '/ai-tools', 
      label: t('aiTools'), 
      icon: Wand2 
    },
    { 
      path: '/analytics', 
      label: t('analytics'), 
      icon: BarChart2 
    },
    { 
      path: '/settings', 
      label: t('settings'), 
      icon: Settings 
    }
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-white/10 flex justify-around items-center h-20 z-50 animate-fade-in">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={cn(
            'flex flex-col items-center justify-center px-3 py-2 transition-all duration-300 rounded-lg',
            isActive(item.path) 
              ? 'text-neon-purple scale-110' 
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <item.icon size={24} className={cn(
            "transition-all duration-200",
            isActive(item.path) 
              ? "text-glow" 
              : ""
          )} />
          <span className={cn(
            "text-xs mt-1 transition-all duration-200",
            isActive(item.path) && "font-medium"
          )}>
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavigation;
