'use client'

/**
 * SRP - Single Responsibility Principle
 * Bad Example
 *
 * This component is doing too much. It is fetching, parsing and displaying data.
 */

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { LinkHeader, User } from './types'
import Link from 'next/link'

export default function Page() {
  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(false)

  const parseLinkHeader = (header: string): LinkHeader => {
    if (!header) {
      return {}
    }

    const parts = header.split(',')
    const links: Record<string, string> = {}

    for (const part of parts) {
      const section = part.split(';')

      if (section.length !== 2) {
        throw new Error('section could not be split on ";"')
      }

      const url = section[0].replace(/<(.*)>/, '$1').trim()
      const name = section[1].replace(/rel="(.*)"/, '$1').trim()

      links[name] = url
    }

    return links
  }

  const fetchUsers = useCallback(async () => {
    const url = `http://localhost:3001/users?_sort=name&_page=${page}&name_like=${search}`

    const response = await fetch(url)
    const fetchedUsers: User[] = await response.json()
    const linkHeader = parseLinkHeader(response.headers.get('Link') ?? '')

    setUsers((currentUsers) => {
      if (page === 1) return fetchedUsers

      return [...currentUsers, ...fetchedUsers]
    })

    if (page > 1) {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        })
      }, 10)
    }

    setHasNextPage(!!linkHeader.next)
  }, [search, page])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <main className="min-h-screen bg-slate-50 px-6">
      <div className="relative mx-auto max-w-[800px]">
        <header className="sticky top-0 flex flex-col gap-4 bg-gradient-to-b from-slate-50 from-60% pb-6 pt-4">
          <div className="flex flex-row justify-center gap-2 text-rose-600">
            <Link href="/solid/srp/good-example">Good Example</Link>
            <Link href="/solid/srp/bad-example">Bad Example</Link>
          </div>
          <h1 className="text-lg font-bold">Users</h1>
          <input
            name="search"
            type="search"
            placeholder="Search"
            onChange={(event) => {
              setSearch(event.target.value)
              setPage(1)
            }}
            className="w-full rounded border border-slate-200 bg-white/90 p-2 outline-none placeholder:text-slate-300 focus:outline-slate-300"
          />
        </header>
        <div className="flex flex-col gap-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex flex-row items-center gap-4 rounded-md bg-white p-4 shadow-sm shadow-slate-200"
            >
              <div className="h-12 w-12 rounded-full border-4 border-slate-300 bg-slate-100">
                <Image
                  src={user.image}
                  alt={user.name}
                  width={48}
                  height={48}
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm font-bold">{user.name}</h4>
                <p className="text-sm text-slate-500">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
        {hasNextPage && (
          <div className="sticky bottom-0 flex flex-row items-center justify-center bg-gradient-to-t from-slate-50 from-20% py-4">
            <button
              type="button"
              className="rounded-md bg-rose-500 px-4 py-2 text-slate-50 hover:bg-rose-700"
              onClick={() => {
                setPage((currentPage) => currentPage + 1)
              }}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
