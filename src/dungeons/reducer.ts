import { Dungeon } from '../context/dungeon';

export interface Action {
  type: 'next' | 'draw' | 'select' | 'discard' | 'shortcut';
  payload?: any;
}

export const dungeonReducer = (state: Dungeon, action: Action) => {
  const next = () => {
    return {
      ...state,
      active: undefined,
      history: [...(state.history || []), state.active]
    };
  };

  const draw = () => {
    const lastCard = state.history?.reverse().shift();
    const drawNumber = lastCard ? lastCard.exits || 1 : 3;
    console.info('Drawing cards', drawNumber);
    const paths = Array.from({ length: drawNumber }, () => state.deck!.shift());

    return { ...state, paths };
  };

  const select = () => {
    const cardIndex = state.paths!.findIndex(({ id }) => id === action.payload);
    const active = state.paths![cardIndex];
    const history = [...(state.history || []), active];

    state.paths?.splice(cardIndex, 1);

    return { ...state, active, history };
  };

  const discard = () => ({
    ...state,
    paths: [],
    discard: [...(state.discard || []), ...state.paths!]
  });

  const shortcut = () => {
    console.info('shortcutting', action.payload);
    const discarded = Array.from({ length: action.payload }, () => {
      state.deck!.shift();
    });
    const active = state.deck!.shift();

    return {
      ...state,
      active,
      discard: { ...(state.discard || []), ...discarded }
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
