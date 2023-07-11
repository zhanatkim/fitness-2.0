export const tariff = [
  {
    id: 1,
    title: 'с тренером',
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

export const tariffForHalfYear = [...tariff].map((el) => ({...el, price: el.price * 6 * 0.9}));
export const tariffForFullYear = [...tariff].map((el) => ({...el, price: el.price * 12 * 0.8}));

// export const tariffForHalfYear = [...tariff].map((item) => {
//   item.price = item.price * 6 * 0.9;
//   return item;
// });
// export const tariffForFullYear = [...tariff].map((item) => {
//   item.price = item.price * 12 * 0.8;
//   return item;
// });
