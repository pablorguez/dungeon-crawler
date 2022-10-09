import React, { useMemo, useReducer } from 'react';
import { moriaMines } from '../dungeons/moria-mines';
import { Action, dungeonReducer } from '../dungeons/reducer';
import { DungeonCard } from '../types/dungeons';
import { shuffle } from '../utils/shuffle';

export interface Dungeon {
  deck?: DungeonCard[];
  active?: DungeonCard;
  paths?: DungeonCard[];
  history?: DungeonCard[];
  discard?: DungeonCard[];
}

export interface DungeonContext {
  state: Dungeon;
  dispatch: (action: Action) => void;
}

export const DungeonContext = React.createContext<DungeonContext>({
  state: {},
  dispatch: () => {}
});

interface ProviderProps {
  children: React.ReactNode;
}

export const DungeonProvider: React.FC<ProviderProps> = ({ children }) => {
  const shuffledDeck = useMemo(() => shuffle(moriaMines.stack), [moriaMines]);
  const [state, dispatch] = useReducer<React.Reducer<any, any>>(
    dungeonReducer,
    {
      deck: shuffledDeck
    }
  );

  return (
    <DungeonContext.Provider value={{ state, dispatch }}>
      {children}
    </DungeonContext.Provider>
  );
};
