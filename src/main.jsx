import './index.css'; // MUST be first - before any component imports
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// Force background color as ultimate fallback
if (typeof window !== 'undefined') {
  document.documentElement.style.background = '#000000';
  document.documentElement.style.backgroundColor = '#000000';
  document.body.style.background = '#000000';
  document.body.style.backgroundColor = '#000000';
  
  const root = document.getElementById('root');
  if (root) {
    root.style.background = '#000000';
    root.style.backgroundColor = '#000000';
  }
}

// Create React app
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
