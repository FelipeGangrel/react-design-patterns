import { FC, HTMLAttributes } from 'react'
import Image from 'next/image'
import type { User } from '../types'
import { twMerge } from 'tailwind-merge'

type Props = {
  user: User
} & HTMLAttributes<HTMLDivElement>

export const UserAvatar: FC<Props> = ({ user, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge(
        'h-fit w-fit rounded-full border-4 border-slate-300',
        props.className,
      )}
    >
      <Image
        width={48}
        height={48}
        src={user.image}
        alt={user.name}
        className="rounded-full object-cover"
      />
    </div>
  )
}
