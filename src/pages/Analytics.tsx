
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Legend, PieChart, Pie, Cell
} from 'recharts';

const Analytics: React.FC = () => {
  const { t } = useTranslation();

  // Mock data for analytics
  const engagementData = [
    { name: 'Mon', instagram: 400, facebook: 240, twitter: 180, whatsapp: 100 },
    { name: 'Tue', instagram: 300, facebook: 290, twitter: 200, whatsapp: 150 },
    { name: 'Wed', instagram: 350, facebook: 320, twitter: 230, whatsapp: 120 },
    { name: 'Thu', instagram: 280, facebook: 400, twitter: 260, whatsapp: 180 },
    { name: 'Fri', instagram: 450, facebook: 380, twitter: 210, whatsapp: 220 },
    { name: 'Sat', instagram: 500, facebook: 420, twitter: 270, whatsapp: 200 },
    { name: 'Sun', instagram: 520, facebook: 450, twitter: 300, whatsapp: 250 },
  ];

  const postTypeData = [
    { name: 'Photos', value: 55 },
    { name: 'Videos', value: 30 },
    { name: 'Text', value: 15 },
  ];

  const platformData = [
    { name: 'Instagram', value: 45 },
    { name: 'Facebook', value: 25 },
    { name: 'Twitter', value: 15 },
    { name: 'WhatsApp', value: 10 },
    { name: 'YouTube', value: 5 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe'];
  
  return (
    <div className="p-4 mb-16">
      <h1 className="text-3xl font-bold mb-6 text-glow animate-glow">{t('analytics')}</h1>
      
      {/* Engagement Overview */}
      <Card className="p-4 mb-6 bg-secondary rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{t('engagement')}</h2>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={engagementData}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
                itemStyle={{ color: '#fff' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Line type="monotone" dataKey="instagram" stroke="#E1306C" strokeWidth={2} />
              <Line type="monotone" dataKey="facebook" stroke="#4267B2" strokeWidth={2} />
              <Line type="monotone" dataKey="twitter" stroke="#1DA1F2" strokeWidth={2} />
              <Line type="monotone" dataKey="whatsapp" stroke="#25D366" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Post Type Distribution */}
        <Card className="p-4 bg-secondary rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Post Type Distribution</h2>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={postTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {postTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
                  itemStyle={{ color: '#fff' }}
                  formatter={(value) => [`${value}%`, '']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        {/* Platform Distribution */}
        <Card className="p-4 bg-secondary rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Platform Distribution</h2>
          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={platformData}
                margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="value" name="Usage %" fill="#9b87f5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      
      {/* Performance Summary */}
      <Card className="p-4 bg-secondary rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Performance Summary</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Total Reach</p>
            <p className="text-3xl font-bold text-neon-purple">12.4K</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Total Engagement</p>
            <p className="text-3xl font-bold text-neon-blue">2.8K</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Avg. Response Time</p>
            <p className="text-3xl font-bold text-neon-pink">4.2h</p>
          </div>
          <div className="bg-background p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Conversion Rate</p>
            <p className="text-3xl font-bold text-neon-green">3.6%</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;
