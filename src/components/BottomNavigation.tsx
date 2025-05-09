
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Settings, BarChart2, Wand2, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNavigation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { 
      path: '/', 
      label: t('home'), 
      icon: Home 
    },
    { 
      path: '/ai-tools', 
      label: t('aiTools'), 
      icon: Wand2 
    },
    { 
      path: '/create-post', 
      label: t('createPost'), 
      icon: Plus,
      isPrimary: true
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
    <nav className="fixed bottom-0 left-0 right-0 bg-secondary/80 backdrop-blur-lg border-t border-white/10 flex justify-around items-center h-16 z-50">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={cn(
            'flex flex-col items-center justify-center px-3 transition-all duration-200',
            item.isPrimary ? 'transform -translate-y-6' : '',
            isActive(item.path) && !item.isPrimary ? 'text-neon-purple' : 'text-muted-foreground'
          )}
        >
          {item.isPrimary ? (
            <div className="bg-gradient-to-r from-neon-purple to-neon-pink rounded-full p-4 btn-glow-pink">
              <item.icon size={24} className="text-white" />
            </div>
          ) : (
            <>
              <item.icon size={22} className={cn(
                "transition-all duration-200",
                isActive(item.path) 
                  ? "text-glow" 
                  : "text-muted-foreground"
              )} />
              <span className="text-xs mt-1">{item.label}</span>
            </>
          )}
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavigation;
