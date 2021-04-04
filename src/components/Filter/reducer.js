const initialState = {
  filter: {
    name: '',
    priceFrom: 0,
    priceTo: 1500,
  },
};

const setFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default setFilter;
