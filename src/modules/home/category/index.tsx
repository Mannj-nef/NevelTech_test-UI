import { useCallback } from 'react'
import { CATEGORY, CATEGORY_MOBILE } from '~/constants/category'

interface ICategoryProps {
  activeName: string
  onClick: (name: string) => void
  isMobile?: boolean
}

const Category = ({ activeName, onClick, isMobile }: ICategoryProps) => {
  const renderValue = useCallback((name: string) => {
    if (!isMobile) return

    return {
      'Games Home': 'Home',
      Timeline: 'Timeline',
      'All Games': 'All Games',
      Search: 'Search',
      Filter: 'Filter'
    }[name]
  }, [])

  return (
    <>
      {isMobile ? (
        <>
          <div className='flex border-b border-gray-300'>
            {CATEGORY_MOBILE.map((item) => (
              <li
                key={item.name}
                className={`${
                  activeName === item.name ? 'text-darkColor opacity-100 border-b border-darkColor' : 'text-gray-400'
                } 
                text-center px-[13px] py-[18px] flex flex-col justify-start items-center gap-2 text-[10px] last:border-l flex-1`}
                onClick={() => onClick?.(item.name)}
              >
                <span>{item.icon} </span>
                <span className='leading-3 uppercase'>{renderValue(item.name)}</span>
              </li>
            ))}
          </div>
        </>
      ) : (
        <ul aria-label='category' className='flex flex-col gap-[15px] mt-[15px] cursor-pointer'>
          {CATEGORY.map((item) => (
            <li
              key={item.name}
              className={`${activeName === item.name ? 'text-darkColor opacity-100' : 'text-gray-400'} flex items-center gap-[5px] `}
              onClick={() => onClick?.(item.name)}
            >
              {item.icon} {item.name}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Category
