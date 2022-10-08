import { useContext } from 'react';
import { DungeonContext } from '../../context/dungeon';
import { Card } from '../card';

export const Discard = () => {
  const {
    state: { discard }
  } = useContext(DungeonContext);

  return (
    <div className="discard placeholder card-placement">
      <h3 className="title">Discard pile</h3>
      {discard ? <Card id="x" type="passage" exits={0} img="" /> : null}
    </div>
  );
};
