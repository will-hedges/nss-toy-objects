const toyToFind = 4;

const marbleRun = {
  id: 1,
  name: "Marble Run",
  maker: "ROKR",
  cost: 20,
  price: 29.99,
};

const nerfGun = {
  id: 2,
  name: "Nerf Gun",
  maker: "NERF",
  cost: 30,
  price: 39.99,
};

const legoSet = {
  id: 3,
  name: "Lego Set",
  maker: "LEGO",
  cost: 80,
  price: 99.99,
};

const toys = [marbleRun, nerfGun, legoSet];

const pokemonPlush = {
  id: 4,
  name: "Pokemon Plush",
  maker: "Nintendo",
  cost: 20,
  price: 34.99,
};

const teddyBear = {
  id: 5,
  name: "Teddy Bear",
  maker: "Leonid's Toys",
  cost: 5,
  price: 19.99,
};

toys.push(pokemonPlush);
toys.push(teddyBear);

// create a new Map()
const toyPrices = new Map();

const addToyToInventory = (toyObject, price) => {
  toyPrices.set(toyObject, price);
};

for (const toy of toys) {
  /*   
  // increase the price of each toy by 5%
  toy.price *= 1.05;
  // display the price of the toy in the catalog
  if (toy.id === toyToFind) {
    console.log(`The ${toy.maker} ${toy.name} costs $${toy.price}.`);
  }
 */

  /*
    complete the addToyToInventory function to use the .set() method on the Map to store prices for toys
    the key in the map should be the toy object, and the value should be the price

    invoke addToyToInventory for each toy to store the price

    delete the price property from the toy objects on the array
  */

  addToyToInventory(toy, toy.price);
  delete toy.price;
}

// confirm that the toy objects don't have price properties anymore
console.log(toys);

// print the Map
console.log(toyPrices);

// build up a Set of toy objects to make sure you don't have duplicate toy entries
const inventory = new Set();
for (const toyObj of toys) {
  inventory.add(toyObj);
}

console.log(inventory);
