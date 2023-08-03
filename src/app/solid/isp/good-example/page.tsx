'use client'

import Link from 'next/link'
import { UserCard } from './components'
import { getFakeUsers } from './utils'

const NavigationLinks = () => {
  return (
    <div className="flex flex-row justify-center gap-2 text-sky-600">
      <Link href="/solid/isp/good-example">Good Example</Link>
      <Link href="/solid/isp/bad-example">Bad Example</Link>
    </div>
  )
}

const users = getFakeUsers(10)

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <NavigationLinks />
      <div className="flex flex-col gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  )
}
