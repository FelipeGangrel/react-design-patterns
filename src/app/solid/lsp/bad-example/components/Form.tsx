import { FC, InputHTMLAttributes, useState } from 'react'

/**
 * This component is a form that takes an input component as a prop.
 *
 * The Input component under `src/app/solid/lsp/bad-example/components/Input.tsx`
 * cannot be used here because it does not extends from the native HTML input
 * element.
 */

type InputComponent = FC<InputHTMLAttributes<HTMLInputElement>>

type FormProps = {
  input: InputComponent
}

export const Form: FC<FormProps> = ({ input: Input }) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <form className="flex flex-col gap-2">
      <label htmlFor="the-input" className="text-sm font-medium text-slate-800">
        Enter some text
      </label>
      <Input
        type="text"
        id="the-input"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p className="text-sm text-slate-800">
        You entered: <span className="font-medium">{inputValue}</span>
      </p>
    </form>
  )
}
