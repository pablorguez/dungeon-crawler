import { useContext } from 'react';
import { DungeonContext } from '../../context/dungeon';
import { Card } from '../card';

export const Paths = () => {
  const { state, dispatch } = useContext(DungeonContext);
  const { paths } = state;

  const handleClick = (id) => {
    dispatch({ type: 'select', payload: id });
  };

  return (
    <div className="paths card-placement">
      {paths
        ? paths.map((option, i) => (
            <div className="placeholder">
              <Card
                {...option}
                key={i}
                onClick={() => {
                  console.log(option);
                  handleClick(option.id);
                }}
              />
              ;
            </div>
          ))
        : null}
    </div>
  );
};
