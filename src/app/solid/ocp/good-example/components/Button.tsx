/**
 * Open Closed Principle
 * Good Example
 *
 * We can add a new icon without changing the component
 *
 */

type Props = {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Props> = ({
  children,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <button
      {...props}
      className="flex w-fit flex-row items-center gap-2 rounded-md bg-sky-500 px-4 py-2 font-semibold text-white hover:bg-sky-600"
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  )
}
