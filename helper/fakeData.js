const faker = require('faker')

const fakeData = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    address: faker.address.streetAddress() + faker.address.city() + faker.address.country(),
    bio: faker.lorem.sentences(),
    image: faker.image.avatar()
}

module.exports = fakeData

