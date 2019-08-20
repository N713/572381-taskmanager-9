const NUMBER_OF_GOALS = 3;
const NUMBER_OF_COLORS = 5;
const NUMBER_OF_TAGS = 5;
const NUMBER_OF_TASKS_TO_RENDER = 3;

const getRandomBoolean = () => {
  return Boolean(Math.round(Math.random()));
};

const getFiltersValues = () => {
  let overdues = 0;
  let todays = 0;
  let favorites = 0;
  let repeatings = 0;
  let tags = 0;
  let archives = 0;

  for (const task of tasks) {
    if (task.dueDate < Date.now()) {
      overdues++;
    }

    if (task.dueDate === Date.now()) {
      todays++;
    }

    if (task.isFavorite) {
      favorites++;
    }

    if (task.isArchive) {
      archives++;
    }

    Object.entries(task.repeatingDays).forEach((day) => {
      if (day.some((element) => element === true)) {
        repeatings++;
      }
    });

    tags += task.tags.size;
  }

  return {overdues, todays, favorites, repeatings, tags, archives};
};

const getRandomIntegerUnder = (under) => {
  return Math.floor(Math.random() * under);
};

const getCardData = () => ({
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
    .slice(getRandomIntegerUnder(NUMBER_OF_TAGS - 1)
        , getRandomIntegerUnder(NUMBER_OF_TAGS - 1))),
  color: [`black`, `yellow`, `blue`, `green`, `pink`][getRandomIntegerUnder(NUMBER_OF_COLORS)],
  isFavorite: getRandomBoolean(),
  isArchive: false,
});

const tasks = new Array(NUMBER_OF_TASKS_TO_RENDER).fill(``).map(getCardData);

const filtersValues = getFiltersValues();

export const filtersData = [
  {title: `All`, count: tasks.length},
  {title: `Overdue`, count: filtersValues.overdues},
  {title: `Today`, count: filtersValues.todays},
  {title: `Favorites`, count: filtersValues.favorites},
  {title: `Repeating`, count: filtersValues.repeatings},
  {title: `Tags`, count: filtersValues.tags},
  {title: `Archive`, count: filtersValues.archives},
];

export {getRandomIntegerUnder};
export {getCardData};
export {tasks};
