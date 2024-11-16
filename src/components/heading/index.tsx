import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

interface IHeadingProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  title: string
  className?: string
}

const classHeading = 'font-semibold text-darkColor'

const Heading = ({ type, title, className }: IHeadingProps) => {
  const CustomHeading = useMemo(
    () =>
      ({
        h1: <h1 className={twMerge(classHeading, 'text-2xl', className)}>{title}</h1>,
        h2: <h2 className={twMerge(classHeading, 'text-xl', className)}>{title}</h2>,
        h3: <h3 className={twMerge(classHeading, 'text-lg', className)}>{title}</h3>,
        h4: <h4 className={twMerge(classHeading, 'text-base', className)}>{title}</h4>,
        h5: <h5 className={twMerge(classHeading, 'text-sm', className)}>{title}</h5>,
        h6: <h6 className={twMerge(classHeading, 'text-xs', className)}>{title}</h6>
      })[type],
    [type]
  )

  return CustomHeading
}

export default Heading
