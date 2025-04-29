
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface Platform {
  id: string;
  name: string;
  icon: string;
  color: string;
}

const CreatePost: React.FC = () => {
  const { t } = useTranslation();
  const [caption, setCaption] = useState('');
  const [mediaFiles, setMediaFiles] = useState<File[]>([]);
  const [mediaPreview, setMediaPreview] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const platforms: Platform[] = [
    { id: 'instagram-post', name: t('instagramPost'), icon: '📸', color: 'from-purple-500 to-pink-500' },
    { id: 'instagram-story', name: t('instagramStory'), icon: '📱', color: 'from-purple-500 to-pink-500' },
    { id: 'facebook-post', name: t('facebookPost'), icon: '👍', color: 'from-blue-600 to-blue-400' },
    { id: 'twitter-post', name: t('twitterPost'), icon: '🐦', color: 'from-cyan-500 to-sky-500' },
    { id: 'youtube-shorts', name: t('youtubeShorts'), icon: '📹', color: 'from-red-600 to-red-400' },
    { id: 'tiktok-post', name: t('tiktokPost'), icon: '🎵', color: 'from-black to-gray-800' },
    { id: 'whatsapp-status', name: t('whatsappStatus'), icon: '💬', color: 'from-green-600 to-green-400' },
    { id: 'whatsapp-group', name: t('whatsappGroup'), icon: '👥', color: 'from-green-600 to-green-400' }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    setMediaFiles([...mediaFiles, ...newFiles]);

    // Create preview URLs
    const newPreviews = newFiles.map(file => URL.createObjectURL(file));
    setMediaPreview([...mediaPreview, ...newPreviews]);
  };

  const handlePlatformToggle = (platformId: string) => {
    if (selectedPlatforms.includes(platformId)) {
      setSelectedPlatforms(selectedPlatforms.filter(id => id !== platformId));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platformId]);
    }
  };

  const handlePost = () => {
    if (mediaFiles.length === 0) {
      toast.error('Please upload at least one media file');
      return;
    }

    if (selectedPlatforms.length === 0) {
      toast.error('Please select at least one platform');
      return;
    }

    // This would be implemented to handle actual posting
    console.log('Posting content', { mediaFiles, caption, selectedPlatforms });
    toast.success('Post created successfully!');
  };

  return (
    <div className="p-4 mb-16">
      <h1 className="text-3xl font-bold mb-6 text-glow animate-glow">{t('createPost')}</h1>

      {/* Upload Media Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('uploadMedia')}</h2>
        <div className="border-2 border-dashed border-accent rounded-lg p-8 flex flex-col items-center justify-center">
          <input
            type="file"
            id="media-upload"
            multiple
            accept="image/*,video/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <label 
            htmlFor="media-upload" 
            className="cursor-pointer bg-accent hover:bg-accent/80 text-accent-foreground py-3 px-5 rounded-lg text-center w-full transition-colors flex items-center justify-center"
          >
            <span className="text-2xl mr-2">➕</span> {t('uploadMedia')}
          </label>
          
          {mediaPreview.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-2 w-full">
              {mediaPreview.map((preview, index) => (
                <div key={index} className="relative">
                  <img 
                    src={preview} 
                    alt={`Preview ${index}`} 
                    className="h-32 w-full object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Caption Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('addCaption')}</h2>
        <Textarea 
          placeholder={`${t('addCaption')}...`}
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="h-32"
        />
      </div>

      {/* Select Platforms Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('selectPlatforms')}</h2>
        <div className="grid grid-cols-2 gap-3">
          {platforms.map((platform) => (
            <Card 
              key={platform.id} 
              className={`overflow-hidden cursor-pointer transition-all ${
                selectedPlatforms.includes(platform.id) 
                  ? 'ring-2 ring-neon-purple btn-glow' 
                  : 'opacity-70'
              }`}
              onClick={() => handlePlatformToggle(platform.id)}
            >
              <div className={`p-3 bg-gradient-to-r ${platform.color} flex items-center gap-2`}>
                <Checkbox 
                  checked={selectedPlatforms.includes(platform.id)} 
                  id={platform.id}
                  className="text-white" 
                />
                <Label htmlFor={platform.id} className="flex items-center gap-2 text-white cursor-pointer">
                  <span className="text-xl">{platform.icon}</span>
                  <span>{platform.name}</span>
                </Label>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Post Buttons */}
      <div className="flex flex-col gap-3">
        <Button 
          className="bg-neon-pink hover:bg-neon-pink/90 text-white py-6 text-lg font-bold btn-glow-pink"
          onClick={handlePost}
        >
          {t('postNow')}
        </Button>
        <Button variant="outline" className="py-6 text-lg font-bold">
          {t('schedulePost')}
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;
