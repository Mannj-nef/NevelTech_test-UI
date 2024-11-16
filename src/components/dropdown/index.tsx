import { ArrowIcon } from '../icons'

const Dropdown = () => {
  return (
    <div className='flex items-center gap-[15px] cursor-pointer border border-gray-600 px-[10px]'>
      <div className='text-xs font-semibold'>Release Date </div>
      <div className='flex items-center h-[26px]'>
        <span className='text-[8px]'>AZ</span>
        <ArrowIcon className='rotate-90 w-5 h-5 text-darkColor' />
      </div>
    </div>
  )
}

export default Dropdown
