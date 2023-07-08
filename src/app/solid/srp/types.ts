export interface User {
  id: number
  name: string
  email: string
  image: string
}

export interface LinkHeader {
  first?: string
  last?: string
  prev?: string
  next?: string
}
