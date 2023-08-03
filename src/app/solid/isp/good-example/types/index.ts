export type User = {
  id: string
  email: string
  image: string
  name: string
  role: string
  status: 'online' | 'offline' | 'away' | 'busy'
}
