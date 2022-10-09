import { Dungeon, DungeonCard } from '../types/dungeons';

const stack: DungeonCard[] = [
  {
    id: 'noise-1',
    type: 'passage',
    envEffect: 'noise',
    exits: 1,
    effect: [
      {
        name: 'Operate elevator',
        type: 'shortcut',
        amount: 5,
        requirement: {
          attr: 'strength',
          value: 1,
          skill: 'wit',
          delay: true,
          who: 'single'
        }
      }
    ]
  },
  {
    id: 'noise-2',
    type: 'passage',
    envEffect: 'noise',
    exits: 2,
    effect: [
      {
        name: 'Unblock tunnel',
        type: 'shortcut',
        amount: 4,
        requirement: {
          attr: 'strength',
          value: 1,
          skill: 'wit',
          delay: true,
          who: 'single'
        }
      }
    ]
  },
  {
    id: 'noise-3',
    type: 'passage',
    envEffect: 'noise',
    exits: 1,
    effect: [
      {
        name: 'Open lock',
        type: 'shortcut',
        amount: 6,
        requirement: {
          attr: 'agility',
          value: 1,
          skill: 'wit',
          delay: true,
          who: 'single'
        }
      }
    ]
  },
  {
    id: 'trace-1',
    type: 'passage',
    envEffect: 'trace',
    exits: 0
  },
  {
    id: 'trace-2',
    type: 'passage',
    envEffect: 'trace',
    exits: 2
  },
  {
    id: 'trace-3',
    type: 'passage',
    envEffect: 'trace',
    exits: 0
  },
  {
    id: 'mist-1',
    type: 'passage',
    envEffect: 'mist',
    exits: 2
  },
  {
    id: 'mist-2',
    type: 'passage',
    envEffect: 'mist',
    exits: 2
  },
  {
    id: 'mist-3',
    type: 'passage',
    envEffect: 'mist',
    exits: 2
  },
  {
    id: 'light-1',
    type: 'passage',
    envEffect: 'light',
    exits: 2
  },
  {
    id: 'light-2',
    type: 'passage',
    envEffect: 'light',
    exits: 1
  },
  {
    id: 'light-3',
    type: 'passage',
    envEffect: 'light',
    exits: 2
  },
  {
    id: 'room-1',
    type: 'room',
    exits: 3
  },
  {
    id: 'room-2',
    type: 'room',
    exits: 3
  },
  {
    id: 'room-3',
    type: 'room',
    exits: 4
  }
];

export const moriaMines: Dungeon = {
  name: 'Moria Mines',
  env: 'dungeon',
  stack
};
