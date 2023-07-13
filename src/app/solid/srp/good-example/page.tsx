'use client'

/**
 * SRP - Single Responsibility Principle
 * Good Example
 *
 * This component is only responsible for rendering data and some UI logic.
 */

import { useEffect } from 'react'
import { ListHeader, ListBody, LoadMoreButton } from './components'
import { useUsers } from './hooks'

export default function Page() {
  const { hasNextPage, users, handleSearch, handleLoadMore } = useUsers()

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [users])

  return (
    <main className="min-h-screen bg-slate-50 px-6">
      <div className="relative mx-auto max-w-[800px]">
        <ListHeader onSearch={handleSearch} />
        <ListBody users={users} />
        {hasNextPage && <LoadMoreButton onClick={handleLoadMore} />}
      </div>
    </main>
  )
}
