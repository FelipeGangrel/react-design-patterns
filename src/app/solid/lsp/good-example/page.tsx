'use client'

import Link from 'next/link'
import { Form, Input } from './components'

const NavigationLinks = () => {
  return (
    <div className="flex flex-row justify-center gap-2 text-sky-600">
      <Link href="/solid/lsp/good-example">Good Example</Link>
      <Link href="/solid/lsp/bad-example">Bad Example</Link>
    </div>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <NavigationLinks />
      <Form input={Input} />
    </main>
  )
}
