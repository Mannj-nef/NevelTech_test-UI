import Input from '~/components/input'
import { Banner, Category, GamesHome } from '~/modules/home'
import { SearchIcon } from '~/components/icons'
import { useState } from 'react'
import { CATEGORY } from '~/constants/category'

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(`${CATEGORY[0].name}`)

  return (
    <div>
      <Banner />

      <div aria-label='content' className='lg:container lg:mt-[100px] flex flex-col lg:flex-row gap-10 !max-w-[1240px]'>
        <div aria-label='left' className='lg:w-[160px] flex-shrink-0'>
          <div aria-label='laptop' className='hidden lg:block'>
            <div aria-label='search' className='border-b-[1px] border-gray-300 pb-[21px]'>
              <Input placeholder='Search' icon={<SearchIcon />} affixes='prefix' />
            </div>

            <Category activeName={activeCategory} onClick={(category) => setActiveCategory(category)} />
          </div>

          <div aria-label='mobile' className='lg:hidden'>
            <Category activeName={activeCategory} onClick={(category) => setActiveCategory(category)} isMobile />
          </div>
        </div>

        <div aria-label='right' className='flex-1'>
          {activeCategory === `${CATEGORY[0].name}` ? (
            <GamesHome />
          ) : (
            <div className='flex flex-col items-center justify-center px-4 text-center mt-[50px]'>
              <h1 className='text-2xl font-bold mb-4 text-gray-800 '>This feature is coming soon</h1>

              <p className='text-base mb-8 text-gray-600 dark:text-gray-400'>Sorry, we are working on this feature.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
