import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://TrollFace.finance/',
  },



  {
    label: 'Exchange',
    icon: 'TradeIcon',
    items: [

      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ]
  },

  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://TrollFace.finance/farms',
  },

  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://TrollFace.finance/pools',
  },

  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/trollfacedefi/',
      },
      {
        label: 'Info',
        href: 'https://poocoin.app/tokens/0xea27688726a94c21180a300484d55a791f993fc6',
      },
    ]
  },


]
export const socials = [


  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/trollfacedefi/",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 24;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
export default config
