const products = [
  { id: 1, name: 'laptop', price: 1 },
  { id: 2, name: 'mobile', price: 2 },
  { id: 3, name: 'watch', price: 1 },
  { id: 4, name: 'camera', price: 2 },
];
const items = products.forEach((product) => product.name);
console.log(items);
//undefined ***
/**because for each don't return; forEach and map method both traverse elements but map return something or, newArray will be created based on your callback function but foreach return undefined*/
