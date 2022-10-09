import { Attribute, Specialty } from './characters';

export type Environment = 'dungeon' | 'mountain' | 'forest' | 'desert';
export type Stuff =
  | 'creature'
  | 'mini-boss'
  | 'boss'
  | 'ally'
  | 'artifact'
  | 'darkness'
  | '';

export type EffectType =
  | 'shortcut'
  | 'water'
  | 'money'
  | 'power'
  | 'food'
  | 'key'
  | 'status'
  | 'paths'
  | 'potion';

export interface Effect {
  name: string;
  type: EffectType;
  amount?: number;
  text?: string;
  requirement: {
    attr: Attribute;
    value: number;
    skill: Specialty;
    delay: boolean;
    who: 'single' | 'party';
  };
}

export interface Trap {
  name: string;
  text: string;
}

export interface Oportunity {
  name: string;
  text: string;
}

export interface DungeonCard {
  id: string;
  name?: string;
  type: 'passage' | 'room';
  envEffect?: 'mist' | 'trace' | 'noise' | 'light';
  exits: number;
  effect?: Effect[];
  oportunity?: Oportunity[];
  trap?: Trap;
  stuff?: Stuff;
}

export interface Dungeon {
  name: string;
  env: Environment;
  stack: DungeonCard[];
}
