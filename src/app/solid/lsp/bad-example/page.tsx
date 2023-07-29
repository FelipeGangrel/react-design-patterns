'use client'

import Link from 'next/link'
import { Form, Input } from './components'

const NavigationLinks = () => {
  return (
    <div className="flex flex-row justify-center gap-2 text-rose-600">
      <Link href="/solid/lsp/good-example">Good Example</Link>
      <Link href="/solid/lsp/bad-example">Bad Example</Link>
    </div>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <NavigationLinks />
      {/* 
        Look at the `input` property and notice that it shows an typing error.
        This occurs because the Form component expects an input component that
        extends from the native HTML input element.

        It appears that the provided input component is working fine, but some
        of the features of the native HTML input element are not available.

        For example, both `type` and `id` properties defined for the input inside
        the Form component are not available in the provided input component.
      */}
      <Form input={Input} />
    </main>
  )
}
