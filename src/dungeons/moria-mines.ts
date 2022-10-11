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
    id: 'noise-4',
    type: 'passage',
    envEffect: 'noise',
    exits: 1,
    effect: [
      {
        name: 'Jump Over the Cliff',
        type: 'shortcut',
        amount: 7,
        requirement: {
          attr: 'agility',
          value: 1,
          skill: 'wit',
          delay: false,
          who: 'party'
        }
      }
    ]
  },
  {
    id: 'noise-5',
    type: 'passage',
    envEffect: 'noise',
    exits: 2
  },
  {
    id: 'noise-6',
    type: 'passage',
    envEffect: 'noise',
    exits: 2
  },
  {
    id: 'noise-7',
    type: 'passage',
    envEffect: 'noise',
    exits: 2
  },
  {
    id: 'noise-8',
    type: 'passage',
    envEffect: 'noise',
    exits: 2
  },
  {
    id: 'noise-9',
    type: 'passage',
    envEffect: 'noise',
    exits: 2
  },
  {
    id: 'noise-10',
    type: 'passage',
    envEffect: 'noise',
    exits: 2
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
    id: 'trace-4',
    type: 'passage',
    envEffect: 'trace',
    exits: 2
  },
  {
    id: 'trace-5',
    type: 'passage',
    envEffect: 'trace',
    exits: 2
  },
  {
    id: 'trace-6',
    type: 'passage',
    envEffect: 'trace',
    exits: 2
  },
  {
    id: 'trace-7',
    type: 'passage',
    envEffect: 'trace',
    exits: 1
  },
  {
    id: 'trace-8',
    type: 'passage',
    envEffect: 'trace',
    exits: 2
  },
  {
    id: 'trace-9',
    type: 'passage',
    envEffect: 'trace',
    exits: 2
  },
  {
    id: 'trace-10',
    type: 'passage',
    envEffect: 'trace',
    exits: 2
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
    id: 'mist-4',
    type: 'passage',
    envEffect: 'mist',
    exits: 0
  },
  {
    id: 'mist-5',
    type: 'passage',
    envEffect: 'mist',
    exits: 0,
    effect: [
      {
        name: 'Climb Down',
        type: 'shortcut',
        amount: 3,
        requirement: {
          attr: 'agility',
          value: 1,
          skill: 'courage',
          delay: false,
          who: 'party'
        }
      }
    ]
  },
  {
    id: 'mist-6',
    type: 'passage',
    envEffect: 'mist',
    exits: 2
  },
  {
    id: 'mist-7',
    type: 'passage',
    envEffect: 'mist',
    exits: 2
  },
  {
    id: 'mist-8',
    type: 'passage',
    envEffect: 'mist',
    exits: 2
  },
  {
    id: 'mist-9',
    type: 'passage',
    envEffect: 'mist',
    exits: 1
  },
  {
    id: 'mist-10',
    type: 'passage',
    envEffect: 'mist',
    exits: 2
  },
  {
    id: 'light-1',
    type: 'passage',
    envEffect: 'light',
    exits: 1
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
    id: 'light-4',
    type: 'passage',
    envEffect: 'light',
    exits: 2
  },
  {
    id: 'light-5',
    type: 'passage',
    envEffect: 'light',
    exits: 1,
    effect: [
      {
        name: 'Secret Door',
        type: 'shortcut',
        amount: 4,
        requirement: {
          attr: 'perception',
          value: 1,
          skill: 'wit',
          delay: true,
          who: 'single'
        }
      }
    ]
  },
  {
    id: 'light-6',
    type: 'passage',
    envEffect: 'light',
    exits: 2
  },
  {
    id: 'light-7',
    type: 'passage',
    envEffect: 'light',
    exits: 2
  },
  {
    id: 'light-8',
    type: 'passage',
    envEffect: 'light',
    exits: 2
  },
  {
    id: 'light-9',
    type: 'passage',
    envEffect: 'light',
    exits: 0
  },
  {
    id: 'light-10',
    type: 'passage',
    envEffect: 'light',
    exits: 0
  },
  {
    id: 'habitación-1',
    type: 'room',
    exits: 3
  },
  {
    id: 'habitación-2',
    type: 'room',
    exits: 3
  },
  {
    id: 'habitación-3',
    type: 'room',
    exits: 4
  },
  {
    id: 'habitación-4',
    type: 'room',
    exits: 4,
    effect: [
      {
        name: 'Secret Passage',
        type: 'shortcut',
        amount: 4,
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
    id: 'habitación-5',
    type: 'room',
    exits: 4
  },
  {
    id: 'habitación-6',
    type: 'room',
    exits: 3
  },
  {
    id: 'habitación-7',
    type: 'room',
    exits: 3
  },
  {
    id: 'habitación-8',
    type: 'room',
    exits: 3
  },
  {
    id: 'habitación-9',
    type: 'room',
    exits: 1
  },
  {
    id: 'habitación-10',
    type: 'room',
    exits: 1
  }
];

export const moriaMines: Dungeon = {
  name: 'Moria Mines',
  env: 'dungeon',
  stack
};
