
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-16 px-4 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-blue bg-clip-text text-transparent animate-pulse">
            ShopBoost AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Enhance your shop's social media presence with AI-powered tools
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 transition-all"
              onClick={() => navigate('/home')}
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-neon-blue hover:bg-neon-blue/10 transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-glow">Our Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-secondary/80 border-accent/50 hover:border-neon-purple transition-all hover:shadow-lg hover:shadow-neon-purple/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 text-3xl">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to grow your business?</h2>
          <p className="text-lg mb-8 text-muted-foreground">Join thousands of local shops already using ShopBoost AI</p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-neon-blue to-neon-green hover:opacity-90 transition-all"
          >
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What our users say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 bg-secondary/80 border-accent/50 hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className="mb-4 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-neon-purple/20 flex items-center justify-center text-xl">
                    {testimonial.initial}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-secondary text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">ShopBoost AI</h2>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="hover:text-neon-purple transition-colors">About</a>
            <a href="#" className="hover:text-neon-purple transition-colors">Features</a>
            <a href="#" className="hover:text-neon-purple transition-colors">Pricing</a>
            <a href="#" className="hover:text-neon-purple transition-colors">Contact</a>
          </div>
          <p className="text-muted-foreground">© 2025 ShopBoost AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Features data
const features = [
  {
    icon: "🤖",
    title: "AI Content Generation",
    description: "Generate engaging captions, hashtags, and content ideas with our AI tools."
  },
  {
    icon: "📱",
    title: "Multi-platform Management",
    description: "Manage Facebook, Instagram, Twitter and WhatsApp from a single dashboard."
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    description: "Track performance metrics and understand what works for your audience."
  },
  {
    icon: "📸",
    title: "Photo & Video Editing",
    description: "Create stunning visuals with our easy-to-use editing tools."
  },
  {
    icon: "🗓️",
    title: "Smart Scheduling",
    description: "Schedule posts at optimal times to maximize engagement."
  },
  {
    icon: "🔍",
    title: "Competitor Analysis",
    description: "Learn from competitors and stay ahead in your local market."
  }
];

// Testimonials data
const testimonials = [
  {
    quote: "ShopBoost AI has transformed how I manage social media for my boutique. I'm seeing 3x more engagement!",
    initial: "S",
    name: "Sunita Patel",
    business: "Fashion Boutique Owner"
  },
  {
    quote: "The AI caption generator saves me hours every week. Now I can focus on running my restaurant instead of worrying about social media.",
    initial: "R",
    name: "Rahul Sharma",
    business: "Restaurant Owner"
  }
];

export default Index;
