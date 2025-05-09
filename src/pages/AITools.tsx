
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Wand, Hash, Lightbulb, Image, Video, Star } from 'lucide-react';

const AITools: React.FC = () => {
  const { t } = useTranslation();

  const tools = [
    {
      id: 'caption',
      name: t('captionGenerator'),
      description: t('Generate engaging captions for your posts'),
      icon: <Wand size={36} className="text-neon-purple" />,
      color: 'from-purple-600 to-purple-400'
    },
    {
      id: 'hashtag',
      name: t('hashtagGenerator'),
      description: t('Find trending hashtags for more reach'),
      icon: <Hash size={36} className="text-neon-pink" />,
      color: 'from-pink-600 to-pink-400'
    },
    {
      id: 'ideas',
      name: t('contentIdeas'),
      description: t('Get fresh content ideas for your business'),
      icon: <Lightbulb size={36} className="text-amber-400" />,
      color: 'from-amber-600 to-amber-400'
    },
    {
      id: 'templates',
      name: t('postTemplates'),
      description: t('Use professional templates for your posts'),
      icon: <Star size={36} className="text-cyan-400" />,
      color: 'from-cyan-600 to-cyan-400'
    },
    {
      id: 'photoEditor',
      name: t('photoEditor'),
      description: t('Edit your photos with filters and effects'),
      icon: <Image size={36} className="text-green-400" />,
      color: 'from-green-600 to-green-400'
    },
    {
      id: 'videoEditor',
      name: t('videoEditor'),
      description: t('Create and edit stunning videos'),
      icon: <Video size={36} className="text-blue-400" />,
      color: 'from-blue-600 to-blue-400'
    }
  ];

  // Create rows of 2 tools each
  const rows = [];
  for (let i = 0; i < tools.length; i += 2) {
    rows.push(tools.slice(i, i + 2));
  }

  return (
    <div className="p-4 pb-20">
      <h1 className="text-3xl font-bold mb-6 text-glow animate-pulse">{t('aiTools')}</h1>
      
      <div className="space-y-6">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-2 gap-4">
            {row.map(tool => (
              <Card 
                key={tool.id}
                className={`overflow-hidden transition-all hover:scale-105 animate-fade-in border-accent/50 shadow-lg hover:shadow-xl ${rowIndex > 0 ? 'opacity-90 hover:opacity-100' : ''}`}
              >
                <div className={`bg-gradient-to-br ${tool.color} p-4 flex flex-col items-center text-center h-full`}>
                  <div className="mb-2 bg-white/10 p-4 rounded-full">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                  <p className="text-xs mt-1 text-white/80 hidden sm:block">{tool.description}</p>
                </div>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AITools;
