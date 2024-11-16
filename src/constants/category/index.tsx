import { DashboardIcon, FileIcon, FilterIcon, HomeIcon, SearchIcon } from '~/components/icons'

export const CATEGORY = [
  {
    name: 'Games Home',
    icon: <HomeIcon />
  },
  {
    name: 'Timeline',
    icon: <FileIcon />
  },
  {
    name: 'All Games',
    icon: <DashboardIcon />
  }
] as const

export const CATEGORY_MOBILE = [
  ...CATEGORY,
  {
    name: 'Search',
    icon: <SearchIcon />
  },
  {
    name: 'Filter',
    icon: <FilterIcon />
  }
] as const
