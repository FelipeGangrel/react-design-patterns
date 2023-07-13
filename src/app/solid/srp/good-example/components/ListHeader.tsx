type Props = {
  onSearch: (search: string) => void
}

export const ListHeader: React.FC<Props> = ({ onSearch }) => {
  return (
    <header className="sticky top-0 flex flex-col gap-4 bg-gradient-to-b from-slate-50 from-60% pb-6 pt-4">
      <h1 className="text-lg font-bold">Users</h1>
      <input
        name="search"
        type="search"
        placeholder="Search"
        onChange={(event) => {
          onSearch(event.target.value)
        }}
        className="w-full rounded border border-slate-200 bg-white/90 p-2 outline-none placeholder:text-slate-300 focus:outline-slate-300"
      />
    </header>
  )
}
