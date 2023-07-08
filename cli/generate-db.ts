import fs from 'fs'
import { program } from 'commander'
import { type SexType, faker } from '@faker-js/faker'

program.option('-u, --users <number>', 'number of users to generate', '20')
program.parse(process.argv)

const { users } = program.opts<{ users: number }>()

const usersArray = Array.from({ length: users }, () => {
  const sex: SexType = Math.random() > 0.5 ? 'female' : 'male'
  const firstName = faker.person.firstName(sex)
  const lastName = faker.person.lastName()
  const email = faker.internet.email({ firstName, lastName }).toLowerCase()
  const id = faker.string.uuid()
  const image = `https://xsgames.co/randomusers/avatar.php?g=${sex}&v=${id}`

  return { id, name: `${firstName} ${lastName}`, email, image }
})

const data = {
  users: usersArray,
}

fs.writeFileSync('./db.json', JSON.stringify(data, null, 2))
