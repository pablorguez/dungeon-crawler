import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { DungeonContext } from '../../context/dungeon';
import { Card } from '../card';
import { CardEffect } from './effect';

Modal.setAppElement('#root');

export const Active = () => {
  const {
    state: { active, paths },
    dispatch
  } = useContext(DungeonContext);
  const [isOpen, setIsOpen] = useState(!!active);
  const [effects, setEffects] = useState<any[]>();
  const popEffect = () => {
    const effectList = effects;

    effectList!.shift();

    setEffects(effectList);
  };

  const handleClick = () => {
    const hasExits = active!.exits > 0;

    dispatch({ type: 'next' });

    if (hasExits) {
      dispatch({ type: 'discard' });
      dispatch({ type: 'draw' });
    }
  };

  useEffect(() => {
    setIsOpen(!!active);

    if (active) {
      console.info('Active card', active);
      const effects = [];
      const { trap, stuff, effect, oportunity } = active;

      trap && effects.push(trap);
      stuff && effects.push(stuff);
      (effect || []).forEach((item) => effects.push(item));
      (oportunity || []).forEach((item) => effects.push(item));

      setEffects(effects);
    }
  }, [active]);

  return (
    <Modal isOpen={isOpen} className="modal" overlayClassName="overlay">
      <div className="main">
        <Card {...active!} selected onClick={handleClick} />
      </div>
      {effects?.length ? (
        <div className="aside">
          {effects.map((effect, i) => (
            <CardEffect key={i} {...effect} pop={popEffect} />
          ))}
        </div>
      ) : null}
    </Modal>
  );
};
