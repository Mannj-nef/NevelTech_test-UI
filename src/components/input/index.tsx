import React, { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  affixes?: 'prefix' | 'suffix'
  className?: string
}

const classInput =
  'font-semibold text-[15.5px] outline-none placeholder:text-[15.5px] placeholder:font-semibold text-darkColor w-full'

const Input = ({ icon, affixes = 'suffix', className, ...res }: InputProps) => {
  const CustomInputAffixes = useMemo(
    () =>
      ({
        prefix: (
          <>
            <span>{icon}</span> <input type='text' className={twMerge(classInput, className)} {...res} />
          </>
        ),

        suffix: (
          <>
            <input type='text' className={twMerge(classInput, className)} {...res} /> <span>{icon}</span>
          </>
        )
      })[affixes],
    [icon, affixes]
  )

  return <div className='flex items-center gap-[5px]'>{CustomInputAffixes}</div>
}

export default Input
