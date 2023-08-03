import Image from 'next/image'
import { FC, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  name: string
  image: string
} & HTMLAttributes<HTMLDivElement>

export const UserAvatar: FC<Props> = ({ image, name, ...props }) => {
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
        src={image}
        alt={name}
        className="rounded-full object-cover"
      />
    </div>
  )
}
