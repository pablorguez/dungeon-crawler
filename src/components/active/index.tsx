import { useContext, useEffect } from 'react';
import { DungeonContext } from '../../context/dungeon';
import { Card } from '../card';

export const Active = () => {
  const {
    state: { active },
    dispatch
  } = useContext(DungeonContext);

  const handleClick = () => {
    dispatch({ type: 'draw' });
  };

  useEffect(() => {
    if (active?.exits && active.exits > 0) {
      dispatch({ type: 'discard' });
    }
  }, [active]);

  return (
    <div className="active placeholder card-placement">
      {active ? <Card {...active} onClick={handleClick} selected /> : null}
    </div>
  );
};
