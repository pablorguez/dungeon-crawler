import { useContext } from 'react';
import { DungeonContext } from '../../context/dungeon';
import { Effect } from '../../types/dungeons';
import { roll } from '../../utils/roll';
import { useMountTransition } from '../../utils/useMountTransition';

interface CardEffectProps extends Effect {
  pop: () => void;
}

export const CardEffect: React.FC<CardEffectProps> = ({
  amount,
  name,
  pop,
  type,
  requirement
}) => {
  const { dispatch } = useContext(DungeonContext);
  const hasTransitioned = useMountTransition(true);

  const resolve = () => {
    const diceRoll = roll(2);
    console.info('🚀 ~ diceRoll', diceRoll);

    if (diceRoll.some((value) => value > 4)) {
      switch (type) {
        case 'shortcut':
          dispatch({ type: 'next' });
          dispatch({ type: 'discard' });
          dispatch({ type: 'shortcut', payload: amount });
          break;

        default:
          break;
      }
    }
    pop();
  };

  return (
    <div className={`effect ${type}`} onClick={resolve}>
      <h5>{name}</h5>
      <p>
        [{requirement.attr.substring(0, 3).toUpperCase()} {requirement.value}] (
        {requirement.skill})
      </p>
    </div>
  );
};
