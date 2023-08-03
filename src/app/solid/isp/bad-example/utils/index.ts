import { type SexType, faker } from '@faker-js/faker'
import type { User } from '../types'

export function getFakeUsers(amount = 5): User[] {
  return Array.from({ length: amount }, () => {
    const id = faker.string.uuid()
    const sex: SexType = Math.random() > 0.5 ? 'female' : 'male'
    const firstName = faker.person.firstName(sex)
    const lastName = faker.person.lastName()
    const name = `${firstName} ${lastName}`
    const email = faker.internet.email({ firstName, lastName }).toLowerCase()
    const image = `https://xsgames.co/randomusers/avatar.php?g=${sex}&v=${id}`
    const status = faker.helpers.arrayElement([
      'online',
      'offline',
      'away',
      'busy',
    ])
    const role = faker.helpers.arrayElement([
      'Backend Developer',
      'Frontend Developer',
      'Designer',
      'Product Manager',
      'QA Engineer',
      'DevOps Engineer',
      'System Administrator',
      'Sales Manager',
      'Marketing Manager',
    ])

    return {
      id,
      name,
      email,
      image,
      status,
      role,
    } as User
  })
}
