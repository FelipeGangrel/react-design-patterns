import type { User } from '../../types'
import { UserAvatar } from './UserAvatar'
import { UserInfo } from './UserInfo'

type Props = {
  user: User
}

export const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="flex flex-row items-center gap-4 rounded-md bg-white p-4 shadow-sm shadow-slate-200">
      <UserAvatar image={user.image} name={user.name} />
      <UserInfo name={user.name} email={user.email} />
    </div>
  )
}
