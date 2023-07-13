import type { User } from '../types'
import { UserCard } from './UserCard'

type Props = {
  users: User[]
}

export const ListBody: React.FC<Props> = ({ users }) => {
  return (
    <div className="flex flex-col gap-2">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}
