import { Dungeon } from '../context/dungeon';

export interface Action {
  type: 'next' | 'draw' | 'select' | 'discard' | 'shortcut';
  payload?: any;
}

export const dungeonReducer = (state: Dungeon, action: Action) => {
  const next = () => ({
    ...state,
    active: undefined,
    record: [...(state.record || []), state.active]
  });

  const draw = () => {
    let drawNumber;

    if (state.record) {
      const cardIndex = state.record.length;
      const lastCard = state.record[cardIndex - 1];
      drawNumber = lastCard.exits || 1;
    } else {
      drawNumber = 3;
    }

    console.info('~ Drawing cards', drawNumber);
    const paths = Array.from({ length: drawNumber }, () => state.deck!.shift());

    return { ...state, paths };
  };

  const select = () => {
    const cardIndex = state.paths!.findIndex(({ id }) => id === action.payload);
    const active = state.paths![cardIndex];
    console.info('~ Selected card', active);

    state.paths?.splice(cardIndex, 1);

    return { ...state, active };
  };

  const discard = () => ({
    ...state,
    paths: [],
    discard: [...(state.discard || []), ...state.paths!]
  });

  const shortcut = () => {
    console.info('~ Shortcutting', action.payload);
    const discarded = Array.from({ length: action.payload }, () => {
      state.deck!.shift();
    });
    const record = [...(state.record || []), state.active];
    const active = state.deck!.shift();

    return {
      ...state,
      active,
      record,
      discard: [...(state.discard || []), ...discarded]
    };
  };

  switch (action.type) {
    case 'next':
      return next();

    case 'draw':
      return draw();

    case 'select':
      return select();

    case 'discard':
      return discard();

    case 'shortcut':
      return shortcut();

    default:
      throw new Error();
  }
};
