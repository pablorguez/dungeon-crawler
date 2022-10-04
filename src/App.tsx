import { useEffect } from 'react';
import './App.scss';
import { Active } from './components/active';
import { Discard } from './components/discard';
import { Paths } from './components/paths';
import { Stack } from './components/stack';
import { DungeonProvider } from './context/dungeon';

function App() {
  return (
    <DungeonProvider>
      <Paths />
      <div className="stacks">
        <Discard />
        <Active />
        <Stack />
      </div>
    </DungeonProvider>
  );
}

export default App;
