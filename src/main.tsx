import ReactDOM from 'react-dom/client';
import App from './App';
import { DungeonProvider } from './context/dungeon';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <DungeonProvider>
    <App />
  </DungeonProvider>
);
