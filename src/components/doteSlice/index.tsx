import { twMerge } from 'tailwind-merge'

const ListDoteSlice = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge('flex items-center justify-center gap-[13px] text-lightColor', className)}>
      <div className='w-2 h-2 rounded-full bg-current opacity-70'></div>
      <div className='w-2 h-2 rounded-full bg-current opacity-70'></div>
      <div className='w-4 h-4 rounded-full border-2 border-current flex items-center justify-center'>
        <div className='w-2 h-2 bg-current rounded-full' />
      </div>
      <div className='w-2 h-2 rounded-full bg-current opacity-70'></div>
      <div className='w-2 h-2 rounded-full bg-current opacity-70'></div>
    </div>
  )
}

export default ListDoteSlice
