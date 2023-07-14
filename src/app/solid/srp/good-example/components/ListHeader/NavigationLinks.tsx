import Link from 'next/link'

export const NavigationLinks = () => {
  return (
    <div className="flex flex-row justify-center gap-2 text-sky-600">
      <Link href="/solid/srp/good-example">Good Example</Link>
      <Link href="/solid/srp/bad-example">Bad Example</Link>
    </div>
  )
}
