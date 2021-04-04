export const setFilter = ({ name, priceFrom, priceTo }) => ({
  type: 'SET_FILTER',
  payload: {
    name,
    priceFrom,
    priceTo,
  },
});
