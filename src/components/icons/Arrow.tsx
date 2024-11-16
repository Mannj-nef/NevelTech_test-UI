const Arrow = ({ className }: { className?: string }) => {
  return (
    <span>
      <svg
        width={30}
        height={30}
        className={className}
        viewBox='0 0 30 30'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g opacity='0.4' clipPath='url(#clip0_2_2532)'>
          <g clipPath='url(#clip1_2_2532)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M12.0002 7.92893L10.586 9.34315L16.2429 15L10.586 20.6569L12.0002 22.0711L19.0713 15L12.0002 7.92893Z'
              fill='black'
            />
          </g>
        </g>
        <defs>
          <clipPath id='clip0_2_2532'>
            <rect width={30} height={30} fill='currentColor' transform='matrix(-1 0 0 -1 30 30)' />
          </clipPath>
          <clipPath id='clip1_2_2532'>
            <rect width={30} height={30} fill='currentColor' transform='matrix(-1 0 0 -1 30 30)' />
          </clipPath>
        </defs>
      </svg>
    </span>
  )
}

export default Arrow
