import { useContext, useEffect } from 'react';
import { DungeonContext } from '../../context/dungeon';
import { Card } from '../card';

export const Stack = () => {
  const {
    state: { deck, active, paths },
    dispatch
  } = useContext(DungeonContext);

  useEffect(() => {
    if (!active && !paths) {
      dispatch({ type: 'draw' });
    }
  }, []);

  return (
    <div className="stack placeholder card-placement">
      <h3 className="title">Dungeon deck ({deck!.length})</h3>
      {deck?.length ? <Card {...deck[0]} /> : null}
    </div>
  );
};
