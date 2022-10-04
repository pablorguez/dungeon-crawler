export type Environment = 'dungeon' | 'mountain' | 'forest' | 'desert';
export type Stuff =
  | 'creature'
  | 'mini-boss'
  | 'boss'
  | 'ally'
  | 'artifact'
  | 'darkness'
  | '';

export interface DungeonCard {
  id: string;
  name?: string;
  type: 'passage' | 'room';
  exits: number;
  effect?: string;
  option?: string;
  trap?: string;
  stuff?: Stuff;
}

export interface Dungeon {
  name: string;
  env: Environment;
  stack: DungeonCard[];
}
