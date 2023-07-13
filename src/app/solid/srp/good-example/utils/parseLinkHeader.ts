/**
 * Parses a link header and returns an object with refs as keys and urls as values.
 */

import type { LinkHeader } from '../types'

export function parseLinkHeader(header: string): LinkHeader {
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
