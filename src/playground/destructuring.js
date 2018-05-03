console.log('destructuring');

const Person = {
  name: 'Caleb',
  age: 22,
  location: {
    city: 'Pullman',
    temp: '70'
  }
}

const { name, age } = Person;
// const name = Person.name, age = Person.age;

console.log(`${name} is ${age}`);

const { city, temp: temperature } = Person.location;
console.log(`Its ${temperature} degrees in ${city}`)

const book = {
  title: 'ego',
  author: 'Ryan',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Publish' } = book.publisher;
console.log(publisherName)

// Array Destructuring

const address = ['1557 NW Turner Dr', 'Pullman', 'Washington', 99163];

const [street, city, state, zip] = address;
console.log(`You are in ${city} ${state}`)

const item = ['coffee', '2', '3', '4'];
const [, , medium] = item;
console.log(`a medium coffee is ${medium}`)