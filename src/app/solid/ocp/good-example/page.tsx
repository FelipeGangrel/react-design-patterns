'use client'

import Link from 'next/link'
import {
  FaArrowLeft as ArrowLeft,
  FaArrowRight as ArrowRight,
  FaHome as Home,
} from 'react-icons/fa'
import { Button } from './components'

const NavigationLinks = () => {
  return (
    <div className="flex flex-row justify-center gap-2 text-sky-600">
      <Link href="/solid/ocp/good-example">Good Example</Link>
      <Link href="/solid/ocp/bad-example">Bad Example</Link>
    </div>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <NavigationLinks />
      <div className="mt-4 flex flex-row justify-center gap-4">
        <Button>Button</Button>
        <Button leftIcon={<ArrowLeft />}>Button</Button>
        <Button rightIcon={<ArrowRight />}>Button</Button>
        <Button leftIcon={<Home />}>Button</Button>
      </div>
    </main>
  )
}
