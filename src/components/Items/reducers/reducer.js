const initialState = {
  users: [],
  isLoading: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS_LIST':
      return {
        ...state,
        users: action.payload,
      };
    case 'ADD_USER':
      return {};

    default:
      return state;
  }
};

export default users;
