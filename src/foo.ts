const FRUITS = ['🍏', '🍉', '🍇'];

const FAST_FOODS = ['🍔', '🍟', '🍕'];

const randomFruit = () =>
  FRUITS[getRandomNumberBetween(0, FRUITS.length - 1)];

const randomFastFood = () =>
  FAST_FOODS[getRandomNumberBetween(0, FRUITS.length - 1)];

const getRandomNumberBetween = (start, end) =>
  Math.floor(Math.random() * end) + start;

export {
  FRUITS,
  FAST_FOODS,
  randomFruit,
  randomFastFood
};