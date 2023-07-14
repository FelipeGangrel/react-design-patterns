import { useCallback, useMemo } from 'react'
import { debounce } from '../../utils'

type Props = {
  onChange: (search: string) => void
}

export const SearchBar: React.FC<Props> = ({ onChange }) => {
  const onSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value)
    },
    [onChange],
  )

  const debouncedOnSearch = useMemo(() => debounce(onSearch, 500), [onSearch])

  return (
    <input
      name="search"
      type="search"
      placeholder="Search"
      onChange={debouncedOnSearch}
      className="w-full rounded border border-slate-200 bg-white/90 p-2 outline-none placeholder:text-slate-300 focus:outline-slate-300"
    />
  )
}
