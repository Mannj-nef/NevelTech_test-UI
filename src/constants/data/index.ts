import { GameItem } from '~/types'
import {
  AppIconChess,
  AppIconMahjongWays,
  AppIconPoker,
  AppIconRPS,
  AppIconTree,
  AppIconWeath,
  AppIconWildBandito,
  AppMusicPanda,
  MahjongThumb,
  ThumbTree,
  WildBanditoThumb
} from '../image'

export const HOST_GAMES: GameItem[] = [
  {
    id: 1,
    thumb: MahjongThumb,
    avatar: AppIconMahjongWays,
    title: 'Mahjong Ways',
    slug: 'mahjong-ways',
    desc: '4TECH™ has just launched their very first Mahjong inspired slot machine gam…'
  },
  {
    id: 2,
    thumb: WildBanditoThumb,
    avatar: AppIconWildBandito,
    title: 'Wild Bandito',
    slug: 'wild-bandito',
    desc: 'Águila which means ‘The Eagle’ is a three-person Mexican bandit team that is activ…'
  }
]

export const HOST_GAME_MOBILE = {
  thumb: ThumbTree,
  icon: AppIconTree,
  title: 'Tree Of Fortune',
  desc: 'Legend has it that a farmer was granted a seed from a deity.',
  more: [
    {
      id: 1,
      name: 'MEDIUM',
      desc: 'Volatility'
    },
    {
      id: 2,
      name: '95.01%',
      desc: 'RTP'
    },
    {
      id: 3,
      name: 'x5000',
      desc: 'Maximum Win'
    }
  ]
}

export const HOT_CATEGORY = [
  {
    id: 1,
    primaryColor: '#5C6EFF',
    title: 'Music',
    desc: 'Music makes everything better, and these games will groove to it!',
    games: [AppIconTree, AppIconChess, AppMusicPanda, AppIconWeath, AppIconRPS]
  },
  {
    id: 2,
    primaryColor: '#19796A',
    title: 'Table Games',
    desc: 'The classic table games for the gentlemen and ladies.',
    games: [AppIconTree, AppIconChess, AppIconPoker, AppIconWeath, AppIconRPS]
  }
]
