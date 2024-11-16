import { Link } from 'react-router-dom'
import { LinkedInIcon, TwitterIcon, YoutubeIcon } from '../icons'

const ListSocial = () => {
  return (
    <div aria-label='social' className='flex gap-[15px] mt-[26px]'>
      <Link to={''}>
        <TwitterIcon />
      </Link>

      <Link to={''}>
        <YoutubeIcon />
      </Link>

      <Link to={''}>
        <LinkedInIcon />
      </Link>
    </div>
  )
}

export default ListSocial
