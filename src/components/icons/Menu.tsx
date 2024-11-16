const Menu = ({ className }: { className?: string }) => {
  return (
    <span className='text-lightColor'>
      <svg
        className={className}
        width='48'
        height='42'
        viewBox='0 0 48 42'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect x='15' y='14' width='18' height='2' fill='currentColor' />
        <rect x='15' y='20' width='18' height='2' fill='currentColor' />
        <rect x='15' y='26' width='18' height='2' fill='currentColor' />
      </svg>
    </span>
  )
}

export default Menu
