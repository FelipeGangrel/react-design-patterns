type Props = {
  onClick: () => void
}

export const LoadMoreButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="sticky bottom-0 flex flex-row items-center justify-center bg-gradient-to-t from-slate-50 from-20% py-4">
      <button
        type="button"
        className="rounded-md bg-sky-500 px-4 py-2 text-slate-50 hover:bg-sky-700"
        onClick={onClick}
      >
        Load more
      </button>
    </div>
  )
}
