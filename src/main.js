'use strict';

import {tasks} from '../src/components/site-data.js';
import {createMenuTemplate} from '../src/components/site-menu.js';
import {createBoardTemplate} from '../src/components/site-board.js';
import {createSearchTemplate} from '../src/components/site-search.js';
import {createFilterTemplate} from '../src/components/site-filter.js';
import {createSortingTemplate} from '../src/components/site-sorting.js';
import {createEditCardTemplate} from '../src/components/site-edit-card.js';
import {createDefaultCardTemplate} from '../src/components/site-default-card.js';
import {createLoadMoreButtonTemplate} from '../src/components/site-load-more.js';

const mainElement = document.querySelector(`.main`);
const mainControlElement = mainElement.querySelector(`.main__control`);

const renderTemplate = (parent, template, place) => {
  parent.insertAdjacentHTML(place, template);
};

const renderTasks = (parent) => {
  parent.insertAdjacentHTML(`beforeend`, tasks.map(createDefaultCardTemplate).join(``));
};

renderTemplate(mainControlElement, createMenuTemplate(), `beforeend`);

const templatesIntoMain = [createSearchTemplate(), createFilterTemplate(), createBoardTemplate()];

templatesIntoMain.forEach((template) => renderTemplate(mainElement, template, `beforeend`));

const boardSectionElement = mainElement.querySelector(`.board`);
const boardTasksElement = boardSectionElement.querySelector(`.board__tasks`);

renderTemplate(boardTasksElement, createEditCardTemplate(), `beforeend`);
renderTemplate(boardSectionElement, createSortingTemplate(), `afterbegin`);
renderTemplate(boardSectionElement, createLoadMoreButtonTemplate(), `beforeend`);
renderTasks(boardTasksElement);
