import { FC, HTMLAttributes } from 'react'
import type { User } from '../types'
import { twMerge } from 'tailwind-merge'

type Props = {
  status: User['status']
} & HTMLAttributes<HTMLDivElement>

export const UserStatus: FC<Props> = ({ status, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge(
        'flex h-5 w-fit flex-row items-center text-xs',
        props.className,
      )}
    >
      <span
        className={twMerge(
          'h-2 w-2 rounded-full',
          status === 'online' && 'bg-green-300',
          status === 'offline' && 'bg-gray-300',
          status === 'away' && 'bg-yellow-300',
          status === 'busy' && 'bg-red-300',
        )}
      />
      <span
        className={twMerge(
          'px-2',
          status === 'online' && 'text-green-500',
          status === 'offline' && 'text-gray-500',
          status === 'away' && 'text-yellow-500',
          status === 'busy' && 'text-red-500',
        )}
      >
        {status}
      </span>
    </div>
  )
}
