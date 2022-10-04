import { Dungeon, Action } from '../context/dungeon';

export const dungeonReducer = (state: Dungeon, action: Action) => {
  const draw = () => {
    console.log('action: ', action);
    const paths = Array.from({ length: state.active?.exits || 3 }, () =>
      state.deck!.shift()
    );

    console.log({ ...state, paths });

    return { ...state, paths };
  };

  const select = () => {
    const cardIndex = state.paths!.findIndex(({ id }) => id === action.payload);
    const active = state.paths![cardIndex];

    state.paths?.splice(cardIndex, 1);

    return { ...state, active };
  };

  const discard = () => {
    return {
      ...state,
      paths: [],
      discard: [...(state.discard || []), ...state.paths!]
    };
  };

  switch (action.type) {
    case 'draw':
      return draw();

    case 'select':
      return select();

    case 'discard':
      return discard();

    default:
      throw new Error();
  }
};
