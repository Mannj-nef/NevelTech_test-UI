import Title from '../title'
import { MusicIcon, PockerIcon } from '~/components/icons'
import { HOT_CATEGORY } from '~/constants/data'
import { useCallback } from 'react'
import ListDoteSlice from '~/components/doteSlice'

const HotCategory = () => {
  const icon = useCallback(
    (iconName: string) =>
      ({
        ['Music']: <MusicIcon />,
        ['Table Games']: <PockerIcon />
      })[iconName],
    [HOT_CATEGORY]
  )

  return (
    <>
      <div aria-label='top'>
        <div className='hidden lg:flex justify-between'>
          <Title title='Hottest Category' />
        </div>

        <div className='px-[25px] lg:hidden'>
          <Title title='HOTTEST CATEGORY' />
        </div>
      </div>

      <div aria-label='content' className=' mt-[30px] '>
        <div className='flex gap-5 justify-between overflow-x-hidden lg:h-auto'>
          {HOT_CATEGORY.map((item) => (
            <div
              key={item.id}
              className='w-full flex-shrink-0 md:flex-1 md:w-auto flex gap-5 lg:gap-[30px] bg-gary0D p-5 rounded-[28px]'
            >
              <div className='flex flex-1 flex-col gap-[15px] lg:gap-[30px]'>
                <div
                  className='rounded-[28px] cursor-pointer p-5 text-lightColor h-[167px] lg:h-[210px] gap-[11px] lg:gap-[15px] flex flex-col'
                  style={{ background: item.primaryColor }}
                >
                  {icon(item.title)}
                  <div className='text-[17px] lg:text-[21px]'>{item.title}</div>
                  <div className='line-clamp-3 opacity-50 text-[10px] lg:text-[13px]'>{item.desc}</div>
                </div>

                <div className='flex gap-5 lg:gap-[30px] '>
                  <div className='flex-1 flex-shrink-0 rounded-md overflow-hidden cursor-pointer'>
                    <img src={item.games[3]} alt='' className='object-cover' />
                  </div>
                  <div className='flex-1 flex-shrink-0 rounded-md overflow-hidden cursor-pointer'>
                    <img src={item.games[4]} alt='' className='object-cover' />
                  </div>
                </div>
              </div>

              <div className='flex flex-1 flex-col-reverse gap-[15px] lg:gap-[30px]'>
                <div className='flex-shrink-0 rounded-[28px] cursor-pointer overflow-hidden text-lightColor h-[167px] lg:h-[210px]'>
                  <img src={item.games[2]} alt='' className='object-cover' />
                </div>

                <div className='flex gap-5 lg:gap-[30px]'>
                  <div className='flex-1 flex-shrink-0 rounded-md overflow-hidden cursor-pointer'>
                    <img src={item.games[0]} alt='' className='object-cover' />
                  </div>
                  <div className='flex-1 flex-shrink-0 rounded-md overflow-hidden cursor-pointer'>
                    <img src={item.games[1]} alt='' className='object-cover' />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div aria-label='footer' className='lg:hidden container flex flex-col gap-[16px] mt-[16px]'>
          <div className='mx-auto'>
            <ListDoteSlice className='text-gray-500' />
          </div>

          <div className='text-[15px] font-semibold flex items-center justify-center gap-[10px] bg-black05 h-[50px] rounded-[14px]'>
            <span>Load More</span>
            <span> + </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default HotCategory
