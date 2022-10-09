import { useContext, useState } from 'react';
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
  const [dirty, setDirty] = useState(false);
  const { dispatch } = useContext(DungeonContext);
  const hasTransitioned = useMountTransition(true);

  const resolve = () => {
    const diceRoll = roll(2);
    console.info('~ diceRoll', diceRoll);
    setDirty(true);

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
    <div
      className={`effect ${type} ${dirty ? 'dirty' : ''}`}
      onClick={!dirty ? resolve : () => {}}
    >
      <h5>{name}</h5>
      <p>
        [{requirement.attr.substring(0, 3).toUpperCase()} {requirement.value}] (
        {requirement.skill})
      </p>
      {dirty ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-mood-sad-dizzy"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="12" r="9"></circle>
          <path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0"></path>
          <path d="M8 9l2 2"></path>
          <path d="M10 9l-2 2"></path>
          <path d="M14 9l2 2"></path>
          <path d="M16 9l-2 2"></path>
        </svg>
      ) : null}
    </div>
  );
};
