const users = [{ id: 1, name: 'abul', job: 'doctor' }];
// console.log(users[0].name);

const data = {
  count: 500,
  data: [
    { id: 1, name: 'john', job: 'designer' },
    { id: 2, name: 'don', job: 'developer' },
    { id: 3, name: 'peter', job: 'marketer' },
  ],
};

// example:
const user = {
  id: 1,
  name: 'thomas',
  address: {
    street: '23/A JS Street',
    road: 'web road',
    postOffice: 'google',
    city: 'moon',
  },
};
const userCity = user.addres?.city;
console.log(userCity);

// to get object property use dot(.)
// to get array elements use index [i]
// console.log(data);
// console.log(data.data);
// console.log(data.data[0]);
// console.log(data.data[0].name);

/**if we misspell any property name we got error
 * "TypeError: Cannot read properties of undefined (reading "the next property of which you misspell")"
 * here we do the optional chaining with ? mark
 * for example: user.addres?.city;
 */
