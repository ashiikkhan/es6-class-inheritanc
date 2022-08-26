/**console the value of email
 * console the value of address
 * console the value of city
 * console the value of lat
 * console the value of company name
 */

const user = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

const userEmail = user.email;
const userAddress = user.address;
const userCity = user.address.city;
const userLat = user.address.geo.lat;
const userCompany = user.company.name;

console.log(userEmail);
console.log(userAddress);
console.log(userCity);
console.log(userLat);
console.log(userCompany);
