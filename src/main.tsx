import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className="text-8xl font-bold text-blue-400">My component Library</h1>
  </StrictMode>
);
