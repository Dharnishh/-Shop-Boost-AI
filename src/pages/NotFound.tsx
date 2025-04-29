
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const NotFound: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-neon-purple text-glow animate-glow">404</h1>
        <p className="text-xl mb-6">{t('Page not found')}</p>
        <p className="mb-8">
          {t('The page')} <code className="bg-secondary p-1 rounded">{location.pathname}</code> {t('does not exist.')}
        </p>
        <Link to="/">
          <Button className="bg-neon-purple hover:bg-neon-purple/80 btn-glow">
            {t('home')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
