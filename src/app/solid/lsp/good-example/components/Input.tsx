import { ChangeEvent, FC, InputHTMLAttributes, useCallback } from 'react'

/**
 *
 * This component follows the Liskov Substitution Principle
 *
 * We can use this component in place of an ordinary input element because
 * it extends from the native HTML input element.
 *
 */

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input: FC<InputProps> = ({ onChange, ...props }) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      console.log('my current value is', event.target.value)
      onChange?.(event)
    },
    [onChange],
  )

  return (
    <input
      {...props}
      onChange={handleChange}
      className="rounded-md border border-slate-400 px-3 py-2"
    />
  )
}
