import Image from 'next/image'

type Props = {
  image: string
  name: string
}

export const UserAvatar: React.FC<Props> = ({ image, name }) => {
  return (
    <div className="h-12 w-12 rounded-full border-4 border-slate-300 bg-slate-100">
      <Image
        src={image}
        alt={name}
        width={48}
        height={48}
        className="h-full w-full rounded-full"
      />
    </div>
  )
}
