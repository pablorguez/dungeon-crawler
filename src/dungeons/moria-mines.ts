import { Dungeon, DungeonCard } from '../types/dungeons';

const stack: DungeonCard[] = [
  {
    id: 'ruido-1',
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
    ],
    img: '1oAFnmOYjZGfdk_6sznIC8SEGxxMtlMaN'
  },
  {
    id: 'ruido-2',
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
    ],
    img: '1wVbm-ju9ESqAiTqsPvvVdpHAFLuw69fD'
  },
  {
    id: 'ruido-3',
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
    ],
    img: '1z9LoLHkEsb1z9CiRA0zDfTSSLESsdPyd'
  },
  {
    id: 'rastro-1',
    type: 'passage',
    envEffect: 'trace',
    exits: 0,
    img: '1TDf4e3LkEQjtxrhGCuDDvtbVhTsHfUJs'
  },
  {
    id: 'rastro-2',
    type: 'passage',
    envEffect: 'trace',
    exits: 2,
    img: '1ahi7gxcoaSSQU0TKSwsXlM-NKp45kgz3'
  },
  {
    id: 'rastro-3',
    type: 'passage',
    envEffect: 'trace',
    exits: 0,
    img: '1w9fwoWaw-KWky-w19gb_xScqVvgsEWFX'
  },
  {
    id: 'niebla-1',
    type: 'passage',
    envEffect: 'mist',
    exits: 2,
    img: '1LczDqIvEd3m50-MY71dMlpk0ubM3q046'
  },
  {
    id: 'niebla-2',
    type: 'passage',
    envEffect: 'mist',
    exits: 2,
    img: '1qVk8gT3gVmqhzcz15lFt_HVVbNsttl4p'
  },
  {
    id: 'niebla-3',
    type: 'passage',
    envEffect: 'mist',
    exits: 2,
    img: '1qVk8gT3gVmqhzcz15lFt_HVVbNsttl4p'
  },
  {
    id: 'luz-1',
    type: 'passage',
    envEffect: 'mist',
    exits: 2,
    img: '1qVk8gT3gVmqhzcz15lFt_HVVbNsttl4p'
  },
  {
    id: 'luz-2',
    type: 'passage',
    envEffect: 'mist',
    exits: 1,
    img: '1yolVULXWyNdC3CA0wJ_oqvQ55l6X1ewa'
  },
  {
    id: 'luz-3',
    type: 'passage',
    envEffect: 'mist',
    exits: 2,
    img: '1yolVULXWyNdC3CA0wJ_oqvQ55l6X1ewa'
  },
  {
    id: 'habitación-1',
    type: 'room',
    exits: 3,
    img: '1nlmh2fC56curWOiTPpvR3XMw72uvZFvZ'
  },
  {
    id: 'habitación-2',
    type: 'room',
    exits: 3,
    img: '1yE5IzBEuzdSTGpsW5V5dggJptzHMwh0t'
  },
  {
    id: 'habitación-3',
    type: 'room',
    exits: 4,
    img: '1yE5IzBEuzdSTGpsW5V5dggJptzHMwh0t'
  }
];

export const moriaMines: Dungeon = {
  name: 'Moria Mines',
  env: 'dungeon',
  stack
};
