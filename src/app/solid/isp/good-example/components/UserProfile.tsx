import { FC, HTMLAttributes } from 'react'

type Props = {
  name: string
  role: string
} & HTMLAttributes<HTMLDivElement>

export const UserProfile: FC<Props> = ({ name, role, ...props }) => {
  return (
    <div {...props}>
      <h4 className="text-md font-semibold text-slate-700">{name}</h4>
      <p className="text-xs text-slate-500">{role}</p>
    </div>
  )
}
