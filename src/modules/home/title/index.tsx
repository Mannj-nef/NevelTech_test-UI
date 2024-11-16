import Heading from '~/components/heading'
import { ArrowIcon } from '~/components/icons'

interface ITitleProps {
  title: string
}

const Title = ({ title }: ITitleProps) => {
  return (
    <>
      <Heading type='h2' title={title} />

      <div className='lg:flex items-center hidden'>
        <ArrowIcon className='rotate-180 border rounded-md border-transparent opacity-50' />
        <ArrowIcon className='border rounded-md border-transparent hover:border-gray-300 cursor-pointer' />
      </div>
    </>
  )
}

export default Title
