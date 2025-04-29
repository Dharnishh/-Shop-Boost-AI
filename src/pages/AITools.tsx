
import React from 'react';
import { useTranslation } from 'react-i18next';

type Tool = {
  id: string;
  name: string;
  icon: string;
  color: string;
};

const AITools: React.FC = () => {
  const { t } = useTranslation();

  const tools: Tool[] = [
    {
      id: 'caption-generator',
      name: t('captionGenerator'),
      icon: '✏️',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 'hashtag-generator',
      name: t('hashtagGenerator'),
      icon: '#️⃣',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'content-ideas',
      name: t('contentIdeas'),
      icon: '💡',
      color: 'from-amber-500 to-yellow-600',
    },
    {
      id: 'post-templates',
      name: t('postTemplates'),
      icon: '📄',
      color: 'from-red-500 to-rose-600',
    },
    {
      id: 'photo-editor',
      name: t('photoEditor'),
      icon: '🖼️',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      id: 'video-editor',
      name: t('videoEditor'),
      icon: '🎬',
      color: 'from-purple-500 to-fuchsia-600',
    },
  ];

  const handleToolClick = (toolId: string) => {
    // This would be implemented to navigate to the specific tool
    console.log(`Opening tool: ${toolId}`);
  };

  return (
    <div className="p-4 mb-16">
      <h1 className="text-3xl font-bold mb-6 text-glow animate-glow">{t('aiTools')}</h1>
      
      <div className="grid grid-cols-2 gap-4">
        {tools.map((tool, index) => (
          <button
            key={tool.id}
            onClick={() => handleToolClick(tool.id)}
            className={`bg-gradient-to-br ${tool.color} rounded-xl p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 h-36 btn-glow animate-float`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="text-4xl mb-2">{tool.icon}</span>
            <span className="text-lg font-medium text-white text-center">
              {tool.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AITools;
