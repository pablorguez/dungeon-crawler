import { useContext, useEffect } from 'react';
import './App.scss';
import { Active } from './components/active';
import { Discard } from './components/discard';
import { History } from './components/history';
import { Paths } from './components/paths';
import { Stack } from './components/stack';
import { DungeonContext } from './context/dungeon';

function App() {
  const {
    state: { deck }
  } = useContext(DungeonContext);

  useEffect(() => {
    deck!.length === 0 && console.log('Game finished');
  }, [deck]);

  return (
    <>
      <Paths />
      <div className="stacks">
        <Discard />
        <History />
        <Stack />
      </div>
      <Active />
    </>
  );
}

export default App;
