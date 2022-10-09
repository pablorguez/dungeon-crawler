import { useContext, useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { DungeonContext } from '../../context/dungeon';
import { DungeonCard } from '../../types/dungeons';
import { Card } from '../card';

export const Record = () => {
  const {
    state: { record }
  } = useContext(DungeonContext);
  const [lastCard, setLastCard] = useState<DungeonCard>();

  useEffect(() => {
    console.log('~~ current record', record);
    record?.length && setLastCard(record.reverse().shift());
  }, [record]);

  return (
    <div className="record placeholder card-placement">
      {lastCard ? (
        <>
          <Card data-tip data-for="record" {...lastCard!} selected />

          {/* <ReactTooltip id="record" delayHide={1000} effect="solid">
            {(record || []).map((item, i) => (
              <div className="card-placement" key={item.id}>
                <Card {...item} key={i} selected />
              </div>
            ))}
          </ReactTooltip> */}
        </>
      ) : null}
    </div>
  );
};
