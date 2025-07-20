import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize cursor tracking
document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
  document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
});

createRoot(document.getElementById("root")!).render(<App />);
