
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';

// Initialize the app with the i18n setup
createRoot(document.getElementById("root")!).render(<App />);
