import axios from 'axios';

export const getUsers = () => (dispatch) => {
  axios.get('/db.json').then(({ data }) => {
    dispatch(setUserList(data.users));
  });
};

export const setUserList = (users) => ({
  type: 'SET_USERS_LIST',
  payload: users,
});

export const setPage = (page) => ({
  type: 'SET_PAGE',
  payload: page,
});
