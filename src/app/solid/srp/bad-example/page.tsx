'use client'

/**
 * SRP - Single Responsibility Principle
 * Bad Example
 *
 * This component is doing too much. It is fetching data, parsing data, and rendering data.
 */

import { useEffect, useState } from 'react'
import { User } from '../types'

const Page = () => {
  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then((response) => response.json())
      .then((users: User[]) => setUsers(users))
  }, [])

  return (
    <main className="bg-slate-50 p-6">
      <div className="mx-auto max-w-[800px]">
        <h1 className="mb-4 text-lg font-bold">Users</h1>
        <div className="mb-4">
          <input
            name="search"
            type="search"
            placeholder="Search"
            onChange={(event) => {
              setSearch(event.target.value)
            }}
            className="w-full rounded border border-slate-300 p-2 placeholder:text-slate-300 focus:border-purple-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          {users
            .filter((user) => {
              const searchText = search.toLocaleLowerCase()

              if (!searchText) {
                return true
              }

              return (
                user.firstName.toLocaleLowerCase().includes(search) ||
                user.lastName.toLocaleLowerCase().includes(search)
              )
            })
            .map((user) => (
              <div
                key={user.id}
                className="flex flex-col gap-2 rounded-md border border-slate-100 bg-white p-4"
              >
                <div>
                  {user.firstName} {user.lastName}
                </div>
                <div>{user.email}</div>
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}

export default Page
