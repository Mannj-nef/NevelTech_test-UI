import { ABOUT_US, EVENTS, OUR_PARTNERS, WEB_MAP } from '~/routers/endpoint'
import Heading from '../heading'
import { LogoIcon } from '../icons'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { capitalizeStr } from '~/utils/toCapitalize'
import ListSocial from './ListSocial'

const GROUPS_NAV_FOOTER = [
  {
    title: 'WEB MAP',
    nav: WEB_MAP
  },
  {
    title: 'ABOUT US',
    nav: ABOUT_US
  },
  {
    title: 'EVENTS',
    nav: EVENTS
  }
]

const Footer = () => {
  const [expend, setExpend] = useState('')

  const navigate = useCallback((objNav: { [key: string]: string }) => {
    return Object.entries(objNav).map(([key, value]) => (
      <li key={key} className='my-[10px] mt-5 text-xs'>
        <Link to={value}>{capitalizeStr(key, '_')}</Link>
      </li>
    ))
  }, [])

  const handleToggle = (name: string) => {
    if (expend === name) {
      setExpend('')
    } else {
      setExpend(name)
    }
  }

  return (
    <footer className='mt-[13px] lg:mt-[75px] lg:border-t border-gray-300 lg:pt-[100px]'>
      <div aria-label='laptop' className='hidden lg:block container text-gray-400'>
        <div aria-label='contact' className='flex gap-5 justify-between'>
          <div aria-label='left' className='w-[172px]'>
            <LogoIcon className='w-[53px] h-[31px] text-gray-500 hidden lg:block' />

            <p className='my-[14px] text-[11px]'>Valletta Buildings, South Street, Valletta - VLT 1103 Malta</p>

            <ListSocial />
          </div>

          <div aria-label='right' className='flex gap-[150px]'>
            <nav>
              <Heading type='h6' title='WEB MAP' />
              <ul>{navigate(WEB_MAP)}</ul>
            </nav>
            <nav>
              <Heading type='h6' title='ABOUT US' />
              <ul>{navigate(ABOUT_US)}</ul>
            </nav>
            <nav>
              <Heading type='h6' title='EVENTS' />
              <ul>{navigate(EVENTS)}</ul>
            </nav>
            <nav>
              <Heading type='h6' title='OUR PARTNERS' />
              <ul>{navigate(OUR_PARTNERS)}</ul>
            </nav>
          </div>
        </div>

        <p aria-label='copyright' className='border-t border-gray-300 mt-[50px] py-10 text-[11px] text-gray-400'>
          COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
        </p>
      </div>

      <div aria-label='mobile' className='lg:hidden'>
        <div className='container  flex flex-col'>
          {GROUPS_NAV_FOOTER.map((item) => (
            <div key={item.title} className=' py-[30px] [&:not(:last-child)]:border-b border-gray-300'>
              <div className='flex justify-between items-center' onClick={() => handleToggle(item.title)}>
                <Heading type='h6' title={item.title} /> <span>+</span>
              </div>
              {expend === item.title && <ul>{navigate(item.nav)}</ul>}
            </div>
          ))}
        </div>

        <div className='border-t border-gray-300 mb-[115px]'>
          <div className='container'>
            <div className=' py-[30px] border-b border-gray-300' onClick={() => handleToggle('OUR PARTNERS')}>
              <div className='flex justify-between items-center'>
                <Heading type='h6' title='OUR PARTNERS' /> <span>+</span>
              </div>
              {expend === 'OUR PARTNERS' && <ul>{navigate(OUR_PARTNERS)}</ul>}
            </div>

            <p className='mt-[50px] my-[14px] text-[11px] text-gray-400'>
              Valletta Buildings, South Street, Valletta - VLT 1103 Malta
            </p>
            <p aria-label='copyright' className='text-[11px] text-gray-400'>
              COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.
            </p>

            <ListSocial />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
