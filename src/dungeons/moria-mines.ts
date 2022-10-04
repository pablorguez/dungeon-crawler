import { Dungeon, DungeonCard } from './dungeons';

const stack: DungeonCard[] = [
  {
    id: '0',
    type: 'passage',
    exits: 1
  },
  {
    id: '1',
    type: 'passage',
    exits: 1
  },
  {
    id: '2',
    type: 'passage',
    exits: 1
  },
  {
    id: '3',
    type: 'room',
    exits: 1,
    effect: 'effect #1'
  },
  {
    id: '4',
    type: 'passage',
    exits: 0
  }
];

export const moriaMines: Dungeon = {
  name: 'Moria Mines',
  env: 'dungeon',
  stack
};
