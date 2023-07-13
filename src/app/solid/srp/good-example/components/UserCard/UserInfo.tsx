type Props = {
  name: string
  email: string
}

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-sm font-bold">{name}</h4>
      <p className="text-sm text-slate-500">{email}</p>
    </div>
  )
}
