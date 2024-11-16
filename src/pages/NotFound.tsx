import { Link } from 'react-router-dom'
import { ROUTER_ENDPOINT } from '~/routers/endpoint'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 text-center'>
      <h1 className='text-4xl font-bold mb-4 text-gray-800 '>404 - Page not found</h1>

      <p className='text-xl mb-8 text-gray-600 dark:text-gray-400'>
        Sorry, we couldn't find the page you're looking for.
      </p>

      <button className='text-lightColor bg-darkColor py-2 px-4 rounded'>
        <Link to={ROUTER_ENDPOINT.HOME}>Back to Home</Link>
      </button>
    </div>
  )
}

export default NotFound
