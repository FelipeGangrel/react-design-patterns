import { ChangeEvent, FC, useCallback } from 'react'

/**
 *
 * This component is not following the Liskov Substitution Principle
 *
 * We cannot use this component in place of an ordinary input element because
 * it does not extends from the native HTML input element.
 *
 */

export type InputProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
}

export const Input: FC<InputProps> = ({ onChange }) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      console.log('my current value is', event.target.value)
      onChange?.(event)
    },
    [onChange],
  )

  return (
    <input
      onChange={handleChange}
      className="rounded-md border border-slate-400 px-3 py-2"
    />
  )
}
