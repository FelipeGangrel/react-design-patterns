import { NavigationLinks } from './NavigationLinks'
import { SearchBar } from './SearchBar'

type Props = {
  onSearch: (search: string) => void
}

export const ListHeader: React.FC<Props> = ({ onSearch }) => {
  return (
    <header className="sticky top-0 flex flex-col gap-4 bg-gradient-to-b from-slate-50 from-60% pb-6 pt-4">
      <NavigationLinks />
      <h1 className="text-lg font-bold">Users</h1>
      <SearchBar onChange={onSearch} />
    </header>
  )
}
