import {filtersData} from "./site-data";

export const createFilterTemplate = () => `
<section class="main__filter filter container">
  ${Array.from(filtersData).map((filter) =>
    `<input
      type="radio"
      id="filter__${filter.title.toLowerCase()}"
      class="filter__input visually-hidden"
      name="filter"
      checked
    />
    <label for="filter__${filter.title.toLowerCase()}" class="filter__label">
      ${filter.title} <span class="filter__${filter.title.toLowerCase()}-count">${filter.count}</span></label
    >
  `).join(``)}
</section>`;
