import { useContext, useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { DungeonContext } from '../../context/dungeon';
import { DungeonCard } from '../../types/dungeons';
import { Card } from '../card';

export const History = () => {
  const {
    state: { history }
  } = useContext(DungeonContext);
  const [lastCard, setLastCard] = useState<DungeonCard>();

  useEffect(() => {
    history?.length && setLastCard(history.reverse().shift());
  }, [history]);

  return (
    <div className="active placeholder card-placement">
      {lastCard ? (
        <>
          <Card data-tip data-for="history" {...lastCard!} selected />

          <ReactTooltip id="history" delayHide={1000} effect="solid">
            {history!.map((item, i) => (
              <div className="card-placement" key={item.id}>
                <Card {...item} key={i} selected />
              </div>
            ))}
          </ReactTooltip>
        </>
      ) : null}
    </div>
  );
};
