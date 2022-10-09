import { useContext, useEffect } from 'react';
import './App.scss';
import { Active } from './components/active';
import { Discard } from './components/discard';
import { Record } from './components/record';
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
        <Record />
        <Stack />
      </div>
      <Active />
    </>
  );
}

export default App;
