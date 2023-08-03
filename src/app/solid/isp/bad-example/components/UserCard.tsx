import type { FC, HTMLAttributes } from 'react'
import type { User } from '../types'
import { UserAvatar } from './UserAvatar'
import { UserStatus } from './UserStatus'
import { UserProfile } from './UserProfile'
import { twMerge } from 'tailwind-merge'

type Props = {
  user: User
} & HTMLAttributes<HTMLDivElement>

export const UserCard: FC<Props> = ({ user, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge(
        'flex flex-row items-center gap-2 rounded-md border border-slate-100 p-2 shadow-md shadow-slate-200',
        props.className,
      )}
    >
      <UserAvatar user={user} />
      <UserProfile user={user} />
      <UserStatus user={user} className="ml-auto" />
    </div>
  )
}
