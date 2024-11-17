import { LogoIcon } from '../icons'
import { Navigation, NavigateMobile } from './nav'

const Header = () => {
  return (
    <header className='h-[70px] lg:h-[90px] bg-gradient-to-b from-black06 to-transparent lg:from-darkColor lg:to-black80 lg:opacity-75 fixed w-full top-0 z-10'>
      <div className='container flex justify-between items-center h-full px-0'>
        <div aria-label='logo'>
          <LogoIcon className='h-[31px] lg:h-[64px]' />
        </div>

        <Navigation />
        <NavigateMobile />
      </div>
    </header>
  )
}

export default Header
