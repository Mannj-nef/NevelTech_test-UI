import { NavLink, useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { WEB_MAP } from '../../../routers/endpoint'

const Navigation = () => {
  const location = useLocation()

  const navList = useMemo(
    () =>
      Object.entries(WEB_MAP).map(([key, value]) => (
        <li
          key={key}
          className={`${location.pathname === value ? 'opacity-100 border-lightColor' : ''}
             h-full hover:opacity-100 border-b-[3px] border-transparent hover:border-lightColor flex items-center group`}
        >
          <NavLink
            to={value}
            className={`${location.pathname === value ? 'opacity-100 ' : 'opacity-70'} text-lightColor  group-hover:opacity-100`}
          >
            {key.toUpperCase()}
          </NavLink>
        </li>
      )),
    [WEB_MAP]
  )

  return <nav className='hidden lg:flex items-center gap-10 h-full'>{navList}</nav>
}

export default Navigation
