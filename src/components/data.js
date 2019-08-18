const getRandomBoolean = () => {
  return Boolean(Math.round(Math.random()));
};

const card = {
  description: [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`],
  dueDate: Date.now(),
  repeatingDays: {
    `Mo`: false,
    `Tu`: getRandomBoolean(),
    `We`: false,
    `Th`: false,
    `Fr`: getRandomBoolean(),
    `Sa`: false,
    `Su`: false,
  },
  tags: new Set ([`intensive`, `practice`, `homework`, `theory`, `keks`]),
  color: [`black`, `yellow`, `blue`, `green`, `pink`],
  isFavorite: getRandomBoolean(),
  isArchive: false,
};
