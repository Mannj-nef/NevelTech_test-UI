import Title from '../title'
import { HOST_GAME_MOBILE, HOST_GAMES } from '~/constants/data'
import GameItem from './GameItem'
import Heading from '~/components/heading'
import Dropdown from '~/components/dropdown'

const HotGame = () => {
  return (
    <>
      <div aria-label='laptop' className='hidden lg:block'>
        <div aria-label='top' className='flex justify-between'>
          <Title title='Hot game' />
        </div>

        <div aria-label='content' className='grid grid-cols-2 gap-5 mt-[30px]'>
          {HOST_GAMES.map((item) => (
            <GameItem key={item.id} game={item} />
          ))}
        </div>
      </div>

      <div aria-label='mobile' className='lg:hidden container'>
        <div aria-label='top' className='flex justify-between items-center'>
          <Heading type='h3' title='HOT GAME' />
          <Dropdown />
        </div>

        <div aria-label='content' className='mx-auto'>
          {HOST_GAME_MOBILE ? (
            <div className='px-3 mt-[30px]'>
              <div className='rounded-tl-[14px] rounded-tr-[14px] overflow-hidden'>
                <img src={HOST_GAME_MOBILE.thumb} className='object-cover ' alt='' />
              </div>

              <div className='p-5 rounded-bl-[14px] rounded-br-[14px] bg-yellowC4'>
                <div className='flex items-center gap-5'>
                  <div className='w-[60px] h-[60px] flex-shrink-0'>
                    <img src={HOST_GAME_MOBILE.icon} alt={HOST_GAME_MOBILE.title} />
                  </div>

                  <div>
                    <p className='text-[16px] font-semibold text-lightColor'>{HOST_GAME_MOBILE.title}</p>
                    <p className='text-[12px] text-lightColor opacity-60'>{HOST_GAME_MOBILE.desc}</p>
                  </div>
                </div>

                <div className='mt-[26px] flex gap-[38px]'>
                  {HOST_GAME_MOBILE.more.map((item) => (
                    <div key={item.id} className='flex flex-col gap-1 items-center text-lightColor'>
                      <span className='text-sm'>{item.name}</span>
                      <span className='text-xs opacity-60'>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default HotGame
