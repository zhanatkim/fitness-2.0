
const tariff = [
  {
    id: 1,
    title: 'С тренером',
    feature: '12 занятий',
    price: 5000,
  },
  {
    id: 2,
    title: 'Дневной',
    feature: 'с 8:00 до 17:00',
    price: 1700,
  },
  {
    id: 3,
    title: 'Полный день',
    feature: 'с 8:00 до 22:00 ',
    price: 2700,
  }
];
const container = document.querySelector('.tabs__content');
const cardTemplate = document.querySelector('#card').content;
const cardContentFragment = document.createDocumentFragment();

// const tariffForHalfYear = [...tariff].map((el) => ({...el, price: el.price * 6 * 0.9}));
// const tariffForFullYear = [...tariff].map((el) => ({...el, price: el.price * 12 * 0.8}));

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

  const tariffHalfYear = [...tariff].map((item) => {
    item.price = item.price * 6 * 0.9;
    return item;
  });

  createCardsList(tariffHalfYear);
  const tariffFullYear = [...tariff].map((item) => {
    item.price = item.price * 12 * 0.8;
    return item;
  });

  createCardsList(tariffFullYear);
};
