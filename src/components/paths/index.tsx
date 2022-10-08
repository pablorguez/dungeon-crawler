import { useContext } from 'react';
import { DungeonContext } from '../../context/dungeon';
import { Card } from '../card';

export const Paths = () => {
  const { state, dispatch } = useContext(DungeonContext);
  const { paths } = state;

  const handleClick = (id: string) => {
    dispatch({ type: 'select', payload: id });
  };

  return (
    <div className="paths card-placement">
      {paths
        ? paths.map((option, i) => (
            <div className="placeholder" key={option.id}>
              <Card
                {...option}
                onClick={() => {
                  handleClick(option.id);
                }}
              />
            </div>
          ))
        : null}
    </div>
  );
};
