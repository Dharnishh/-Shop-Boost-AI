
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";

// Mock data for connected accounts
const mockAccounts = [
  { 
    id: 1, 
    platform: 'instagram', 
    name: 'myshop_official', 
    followers: 1256,
    posts: 78,
    stats: {
      likes: 4231,
      views: 12054,
      engagement: '3.2%'
    }
  },
  { 
    id: 2, 
    platform: 'facebook', 
    name: 'My Local Shop', 
    followers: 845,
    posts: 62,
    stats: {
      likes: 3120,
      views: 8750,
      engagement: '2.8%'
    }
  },
  { 
    id: 3, 
    platform: 'twitter', 
    name: '@myshop_tweets', 
    followers: 524,
    posts: 196,
    stats: {
      likes: 1876,
      views: 5430,
      engagement: '2.1%'
    }
  },
  { 
    id: 4, 
    platform: 'whatsapp', 
    name: '+91 98765 43210', 
    followers: 'N/A',
    posts: 34,
    stats: {
      likes: 'N/A',
      views: 'N/A',
      engagement: 'N/A'
    }
  }
];

const platformColors = {
  instagram: 'from-purple-500 to-pink-500',
  facebook: 'from-blue-600 to-blue-400',
  twitter: 'from-cyan-500 to-sky-500',
  whatsapp: 'from-green-600 to-green-400',
  youtube: 'from-red-600 to-red-400',
  tiktok: 'from-black to-gray-800'
};

const platformIcons = {
  instagram: '📸',
  facebook: '👍',
  twitter: '🐦',
  whatsapp: '💬',
  youtube: '📹',
  tiktok: '🎵'
};

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [accounts] = useState(mockAccounts);
  const { toast } = useToast();
  
  const totalPosts = accounts.reduce((sum, account) => sum + account.posts, 0);
  const activePlatforms = accounts.length;

  const handleCardClick = (platform: string) => {
    toast({
      title: t('Account Selected'),
      description: t(`${platform} account details opened`),
      duration: 2000,
    });
  };

  return (
    <div className="p-4 mb-16">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-glow animate-pulse">{t('welcome')}</h1>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="bg-secondary/80 border-accent/50 p-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-neon-purple/20 transition-all hover:scale-105">
          <div className="text-5xl font-bold text-center text-glow">{totalPosts}</div>
          <div className="text-center mt-2 text-sm">{t('totalPosts')}</div>
        </Card>
        <Card className="bg-secondary/80 border-accent/50 p-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-neon-pink/20 transition-all hover:scale-105">
          <div className="text-5xl font-bold text-center text-glow-pink">{activePlatforms}</div>
          <div className="text-center mt-2 text-sm">{t('activePlatforms')}</div>
        </Card>
      </div>
      
      <h2 className="text-xl font-semibold mb-4">{t('connectedAccounts')}</h2>
      
      {/* Connected Accounts */}
      <div className="space-y-4">
        {accounts.map((account, index) => (
          <Card 
            key={account.id} 
            className={`flex flex-col overflow-hidden rounded-xl shadow-lg animate-fade-in hover:shadow-xl transition-transform hover:scale-[1.02] cursor-pointer`}
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => handleCardClick(account.platform)}
          >
            <div className={`p-4 bg-gradient-to-r ${platformColors[account.platform as keyof typeof platformColors] || 'from-gray-700 to-gray-600'}`}>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">
                    {platformIcons[account.platform as keyof typeof platformIcons] || '📱'}
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{account.platform}</h3>
                    <p className="text-sm text-white opacity-90">{account.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-white">
                    {account.followers !== 'N/A' ? `${account.followers} ${t('followers')}` : ''}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="p-4 bg-secondary grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-sm text-muted-foreground">{t('likes')}</p>
                <p className="font-semibold">{account.stats.likes}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t('views')}</p>
                <p className="font-semibold">{account.stats.views}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t('engagement')}</p>
                <p className="font-semibold">{account.stats.engagement}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Best Performing Content */}
      <h2 className="text-xl font-semibold mt-6 mb-4">{t('bestContent')}</h2>
      <Card className="rounded-xl overflow-hidden shadow-lg bg-secondary/80 border-accent/50 hover:shadow-xl hover:shadow-neon-purple/20 transition-all">
        <div className="aspect-video bg-black/50 flex items-center justify-center">
          <div className="text-xl opacity-50">📸 {t('bestContent')}</div>
        </div>
        <div className="p-4">
          <h3 className="font-bold">Summer Collection 2023</h3>
          <div className="flex justify-between items-center mt-2">
            <div className="bg-accent/20 text-accent rounded-full px-3 py-1 text-xs">Instagram Post</div>
            <div className="text-sm">❤️ 325 • 👁️ 1.2K</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
