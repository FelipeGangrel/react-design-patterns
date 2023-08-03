import { FC, HTMLAttributes } from 'react'
import type { User } from '../types'
import { twMerge } from 'tailwind-merge'

type Props = {
  user: User
} & HTMLAttributes<HTMLDivElement>

export const UserStatus: FC<Props> = ({ user, ...props }) => {
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
          user.status === 'online' && 'bg-green-300',
          user.status === 'offline' && 'bg-gray-300',
          user.status === 'away' && 'bg-yellow-300',
          user.status === 'busy' && 'bg-red-300',
        )}
      />
      <span
        className={twMerge(
          'px-2',
          user.status === 'online' && 'text-green-500',
          user.status === 'offline' && 'text-gray-500',
          user.status === 'away' && 'text-yellow-500',
          user.status === 'busy' && 'text-red-500',
        )}
      >
        {user.status}
      </span>
    </div>
  )
}
