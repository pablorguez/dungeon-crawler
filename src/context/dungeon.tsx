import React, { ReducerState, useReducer } from 'react';
import { DungeonCard } from '../dungeons/dungeons';
import { moriaMines } from '../dungeons/moria-mines';
import { dungeonReducer } from '../dungeons/reducer';

export interface Dungeon {
  deck?: DungeonCard[];
  active?: DungeonCard;
  paths?: DungeonCard[];
  history?: DungeonCard[];
  discard?: DungeonCard[];
}

export interface Action {
  type: 'draw' | 'select' | 'discard';
  payload?: any;
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
  const [state, dispatch] = useReducer<React.Reducer<any, any>>(
    dungeonReducer,
    {
      deck: moriaMines.stack
    }
  );

  return (
    <DungeonContext.Provider value={{ state, dispatch }}>
      {children}
    </DungeonContext.Provider>
  );
};
