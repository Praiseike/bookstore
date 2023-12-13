import './bootstrap';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
const domRoot = document.querySelector('#root');
const root = createRoot(domRoot);

console.log("something is s");

root.render(<App />);
