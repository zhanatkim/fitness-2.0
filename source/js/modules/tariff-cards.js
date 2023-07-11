
import {tariff, tariffForHalfYear, tariffForFullYear} from '../mocks';

const container = document.querySelector('.tabs__content');
const cardTemplate = document.querySelector('#card').content;
const cardContentFragment = document.createDocumentFragment();

const createCard = ({id, title, feature, price}) => {
  const cardTemplateClone = cardTemplate.cloneNode(true);
  cardTemplateClone.querySelector('.tariff__card').dataTariffId = id;
  cardTemplateClone.querySelector('.tariff__title').textContent = `${title}`;
  cardTemplateClone.querySelector('.tariff__feature').textContent = `${feature}`;
  cardTemplateClone.querySelector('.tariff__price').textContent = `${price}`;
  cardTemplateClone.querySelector('.tariff__bg').textContent = `${price}`;
  return cardTemplateClone;
};

const createCardsList = (cards) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('tabs__element');
  wrapper.classList.add('tariff');
  wrapper.dataset.tabs = 'element';
  cards.forEach((card) => {
    cardContentFragment.appendChild(createCard(card));
  });
  wrapper.appendChild(cardContentFragment);
  container.appendChild(wrapper);
};

export const renderMembership = () => {
  container.querySelectorAll('.tabs__element').forEach((el) => el.remove());
  createCardsList(tariff);
  createCardsList(tariffForHalfYear);
  createCardsList(tariffForFullYear);
};
