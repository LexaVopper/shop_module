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
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

export default users;
