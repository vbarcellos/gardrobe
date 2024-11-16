const { faker } = require("@faker-js/faker");

const clothingCategories = ["shirts", "pants", "dresses"];
const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["Blue", "Red", "Green", "Black", "White", "Yellow", "Pink"];

const generateImagePath = (category) => {
  const randomIndex = faker.number.int({ min: 1, max: 6 });
  return `/img/${category}${randomIndex}.png`;
};

const generateProducts = (count = 20) => {
  return Array.from({ length: count }, () => {
    const category = faker.helpers.arrayElement(clothingCategories);
    const upperCaseCategory = category.charAt(0).toUpperCase() + category.slice(1);

    const productName = `${upperCaseCategory} ${faker.commerce.productAdjective()} ${faker.color.human()}`;

    return {
      id: faker.string.uuid(),
      name: productName,
      description: faker.commerce.productDescription(),
      price: faker.commerce.price({ min: 30, max: 300, dec: 2, symbol: "$" }),
      category,
      sizes: faker.helpers.arrayElements(sizes, faker.number.int({ min: 1, max: sizes.length })),
      colors: faker.helpers.arrayElements(colors, faker.number.int({ min: 1, max: colors.length })),
      image: generateImagePath(category),
    };
  });
};

module.exports = generateProducts;
