import { FC, HTMLAttributes } from 'react'
import type { User } from '../types'

type Props = {
  user: User
} & HTMLAttributes<HTMLDivElement>

export const UserProfile: FC<Props> = ({ user, ...props }) => {
  return (
    <div {...props}>
      <h4 className="text-md font-semibold text-slate-700">{user.name}</h4>
      <p className="text-xs text-slate-500">{user.role}</p>
    </div>
  )
}
