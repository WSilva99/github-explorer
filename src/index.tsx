import { createRoot } from 'react-dom/client';
import './assets/style/global.scss'
import App from './App';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
