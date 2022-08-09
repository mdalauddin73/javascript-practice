const shoppingCart = {
    processor: 2,
    motherboard: 2,
    mouse: 4,
    ram: 8,
    monitor: 2
};
// console.log(typeof students);

// find the values when you know the property name - approach -1
const mouseCount = shoppingCart.mouse;
console.log(mouseCount);

// find the values when you know the property name - approach -2
const mouseCount2 = shoppingCart['mouse'];
console.log(mouseCount2);

// find the object properties
const properties = Object.keys(shoppingCart);
console.log(properties);

// find the object property values
const propertiesValues = Object.values(shoppingCart);
console.log(propertiesValues);

// find a property and values from an object
const propertyName = 'processor';
const propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

//Set property values --- approach -1
shoppingCart.mouse = 15;
console.log(shoppingCart);

//Set property values --- approach -2
shoppingCart['mouse'] = 25;
console.log(shoppingCart);
shoppingCart[propertyName] = 10; // const propertyName = 'processor';
console.log(shoppingCart);

// find out property and value from an object
for (i = 0; i < properties.length; i++) {
    // console.log(properties[i]);
    const propertyName = properties[i];
    const propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

// find this using ***For in Loop***
for (let propertyName in shoppingCart) {
    const values = shoppingCart[propertyName];
    console.log(propertyName, values);
}