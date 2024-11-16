import HotGame from './HotGame'
import HotCategory from './HotCategory'

const GamesHome = () => {
  return (
    <div>
      <div aria-label='hot-game'>
        <HotGame />
      </div>

      <div aria-label='hottest-category' className='mt-[47px] lg:mt-[100px]'>
        <HotCategory />
      </div>
    </div>
  )
}

export default GamesHome
