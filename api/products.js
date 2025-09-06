import { faker } from '@faker-js/faker';

const categories = ['shirts', 'pants', 'dresses'];

function imagePath(category) {
  const n = faker.number.int({ min: 1, max: 6 });
  // shirts1.png, pants3.png, dresses6.png, etc.
  return `/img/${category}${n}.png`;
}

function generateProducts(count = 50) {
  return Array.from({ length: count }, () => {
    const category = faker.helpers.arrayElement(categories);
    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price({ min: 30, max: 300 })),
      category,
      sizes: ['XS','S','M','L','XL'].slice(0, faker.number.int({ min: 1, max: 5 })),
      colors: ['Blue','Red','Green','Black','White','Yellow','Pink'].slice(0, faker.number.int({ min: 1, max: 7 })),
      image: imagePath(category),
    };
  });
}

export default function handler(req, res) {
  const count = Number(req.query?.count) || 50;
  res.status(200).json(generateProducts(count));
}
