/**
 * Open Closed Principle
 * Bad Example
 *
 * If we want to add a new icon, we need to change the component
 *
 */

import {
  FaArrowLeft as ArrowLeft,
  FaArrowRight as ArrowRight,
  FaHome as Home,
} from 'react-icons/fa'

type Props = {
  leftIcon?: 'left-arrow' | 'right-arrow' | 'home'
  rightIcon?: 'left-arrow' | 'right-arrow' | 'home'
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
      className="flex w-fit flex-row items-center gap-2 rounded-md bg-rose-500 px-4 py-2 font-semibold text-white hover:bg-rose-600"
    >
      {leftIcon === 'left-arrow' && <ArrowLeft />}
      {leftIcon === 'right-arrow' && <ArrowRight />}
      {leftIcon === 'home' && <Home />}
      {children}
      {rightIcon === 'left-arrow' && <ArrowLeft />}
      {rightIcon === 'right-arrow' && <ArrowRight />}
      {rightIcon === 'home' && <Home />}
    </button>
  )
}
