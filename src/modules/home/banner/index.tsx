import ListDoteSlice from '~/components/doteSlice'
import Heading from '~/components/heading'
import { ToRightIcon } from '~/components/icons'
import { BannerMobile, LogoBannerLaptop } from '~/constants/image'

const Banner = () => {
  return (
    <>
      <div aria-label='laptop' className='w-full bg-green03 hidden lg:block'>
        <div className='container'>
          <img src={LogoBannerLaptop} className='object-cover' alt='banner' />
        </div>
      </div>

      <div aria-label='mobile' className='w-full lg:hidden relative'>
        <div>
          <img src={BannerMobile} className='object-cover' alt='banner' />
        </div>

        <div className='absolute bottom-0 left-0 p-5 text-center text-lightColor w-full bg-gradient-to-t from-black06 to-transparent'>
          <ListDoteSlice />

          <Heading
            type='h2'
            title='Chicky Run'
            className='text-lightColor text-[24px] font-normal mb-[21px] mt-[10px]'
          ></Heading>

          <p className='flex items-center gap-1 justify-center text-[13px]'>
            <span>Game Details</span>
            <ToRightIcon />
          </p>
        </div>
      </div>
    </>
  )
}

export default Banner
