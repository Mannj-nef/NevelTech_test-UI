export const WEB_MAP = {
  HOME: '/',
  GAMES: '/games',
  NEWS: '/news',
  MATH: '/math',
  COMPANY: '/company',
  EVENTS: '/events',
  PARTNERS: '/partners'
} as const

export const ABOUT_US = {
  LICENSING: '/licensing',
  CERTIFICATION: '/certification',
  RESPONSIBLE_GAMING: '/responsible-gaming',
  EXHIBITIONS: '/exhibitions',
  COPYRIGHT_PROTECTION: '/copyright-protection',
  PRIVACY_POLICY: '/privacy-policy'
} as const

export const EVENTS = {
  PG_ICE_2017: '/pg-ice-2017',
  PG_ICE_2018: '/pg-ice-2018',
  PG_ICE_2019: '/pg-ice-2019',
  ABOUT_ICE: '/about-ice'
} as const

export const OUR_PARTNERS = {
  RELAX_GAMING: '/relax-gaming',
  LEANDER_GAMES: '/leander-games'
} as const

export const ROUTER_ENDPOINT = {
  ...WEB_MAP,
  ...ABOUT_US,
  ...EVENTS,
  ...OUR_PARTNERS
} as const
