const NUMBER_OF_GOALS = 3;
const NUMBER_OF_COLORS = 5;
const NUMBER_OF_TAGS = 5;

const getRandomBoolean = () => {
  return Boolean(Math.round(Math.random()));
};

const getRandomIntegerUnder = (under) => {
  return Math.floor(Math.random() * under);
};

export const getCardData = () => ({
  description: [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`][getRandomIntegerUnder(NUMBER_OF_GOALS)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  repeatingDays: {
    'Mo': false,
    'Tu': getRandomBoolean(),
    'We': false,
    'Th': false,
    'Fr': false,
    'Sa': false,
    'Su': false,
  },
  tags: new Set([`homework`, `theory`, `practice`, `intensive`, `keks`]
    .slice(getRandomIntegerUnder(NUMBER_OF_TAGS - 1), getRandomIntegerUnder(NUMBER_OF_TAGS - 1))),
  color: [`black`, `yellow`, `blue`, `green`, `pink`][getRandomIntegerUnder(NUMBER_OF_COLORS)],
  isFavorite: getRandomBoolean(),
  isArchive: false,
});
