
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import i18n from '@/i18n';

interface SocialAccount {
  id: string;
  platform: string;
  username: string;
  connected: boolean;
}

const Settings: React.FC = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [whatsappNumber, setWhatsappNumber] = useState('+91 98765 43210');
  const [darkMode, setDarkMode] = useState(true);
  
  const [socialAccounts, setSocialAccounts] = useState<SocialAccount[]>([
    { id: '1', platform: 'instagram', username: 'myshop_official', connected: true },
    { id: '2', platform: 'facebook', username: 'My Local Shop', connected: true },
    { id: '3', platform: 'twitter', username: '@myshop_tweets', connected: true },
    { id: '4', platform: 'youtube', username: 'My Shop Channel', connected: false },
    { id: '5', platform: 'tiktok', username: '@myshop_tiktok', connected: false },
  ]);

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  const handleToggleAccount = (id: string) => {
    setSocialAccounts(accounts => 
      accounts.map(account => 
        account.id === id 
          ? { ...account, connected: !account.connected } 
          : account
      )
    );
  };

  return (
    <div className="p-4 mb-16">
      <h1 className="text-3xl font-bold mb-6 text-glow animate-glow">{t('settings')}</h1>
      
      {/* Language Settings */}
      <Card className="p-4 mb-6 bg-secondary rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{t('language')}</h2>
        <div className="mb-4">
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
              <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
              <SelectItem value="ta">தமிழ் (Tamil)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>
      
      {/* WhatsApp Settings */}
      <Card className="p-4 mb-6 bg-secondary rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{t('whatsappNumber')}</h2>
        <div>
          <Label htmlFor="whatsapp-number">{t('whatsappNumber')}</Label>
          <Input 
            id="whatsapp-number"
            type="tel"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            className="mb-4"
          />
          <div className="flex items-center justify-between">
            <Button className="bg-green-600 hover:bg-green-700">
              {t('save')}
            </Button>
            <div className="flex items-center space-x-2">
              <Switch id="whatsapp-status" checked={true} />
              <Label htmlFor="whatsapp-status">
                WhatsApp Status
              </Label>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Social Media Accounts */}
      <Card className="p-4 mb-6 bg-secondary rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{t('accountManagement')}</h2>
        <div className="space-y-3">
          {socialAccounts.map(account => (
            <div key={account.id} className="flex items-center justify-between p-3 bg-background rounded-lg">
              <div className="flex items-center">
                <div className="mr-3 text-2xl">
                  {account.platform === 'instagram' && '📸'}
                  {account.platform === 'facebook' && '👍'}
                  {account.platform === 'twitter' && '🐦'}
                  {account.platform === 'youtube' && '📹'}
                  {account.platform === 'tiktok' && '🎵'}
                </div>
                <div>
                  <div className="font-medium capitalize">{account.platform}</div>
                  <div className="text-sm text-muted-foreground">{account.username}</div>
                </div>
              </div>
              <div>
                <Switch 
                  checked={account.connected} 
                  onCheckedChange={() => handleToggleAccount(account.id)} 
                />
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4 bg-neon-purple hover:bg-neon-purple/80 btn-glow">
          {t('addAccount')}
        </Button>
      </Card>
      
      {/* Theme Settings */}
      <Card className="p-4 mb-6 bg-secondary rounded-xl shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Dark Mode</h2>
          <Switch 
            checked={darkMode}
            onCheckedChange={setDarkMode}
          />
        </div>
      </Card>
      
      {/* Profile Settings */}
      <Card className="p-4 bg-secondary rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{t('profileSettings')}</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="business-name">Business Name</Label>
            <Input id="business-name" defaultValue="My Local Shop" />
          </div>
          <div>
            <Label htmlFor="business-email">Email</Label>
            <Input id="business-email" type="email" defaultValue="contact@mylocalshop.com" />
          </div>
          <Button className="w-full bg-neon-purple hover:bg-neon-purple/80 btn-glow">
            {t('save')}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
