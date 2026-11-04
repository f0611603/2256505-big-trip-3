import FilterView from './view/filter-view.js';
import { render } from './render.js';

const siteHeaderElement = document.querySelector('.page-header');
const siteListFilterElement = siteHeaderElement.querySelector('.trip-controls__filters').lastElementChild;

render(new FilterView(), siteListFilterElement);
