import { Link } from 'react-router-dom'
import { type GameItem } from '~/types'

interface IGameItemProps {
  game: GameItem
}

const GameItem = ({ game }: IGameItemProps) => {
  return (
    <div key={game.id} className='flex flex-col gap-[30px]'>
      <div className='h-[221px] rounded-md overflow-hidden'>
        <img src={game.thumb} alt={game.title} className='object-cover' />
      </div>

      <div className='flex items-center gap-5'>
        <div className='w-[90px] h-[90px] rounded-md overflow-hidden flex-shrink-0'>
          <img src={game.avatar} alt={game.title} className='object-cover' />
        </div>

        <div className='flex flex-col justify-center'>
          <p className='text-[19px] font-semibold'>{game.title}</p>
          <p className='line-clamp-2 text-[13px] text-gray-500'>{game.desc}</p>
        </div>

        <Link
          to={game.slug}
          className='inline-flex items-center justify-center w-[75px] px-[22px] h-[28px] border border-gray-300 rounded-md text-[13px] font-semibold'
        >
          View
        </Link>
      </div>
    </div>
  )
}

export default GameItem
