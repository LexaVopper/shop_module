import { createSelector } from 'reselect';

const allUsers = (state) => state.users.users;
const filterBy = (state) => state.setFilter.filter;

export const filterByName = createSelector([allUsers, filterBy], (users, filterby) => {
  if (!filterby.name) {
    return users;
  }

  return users.filter((users) => users.name === filterby.name);
});

export const filteredUsers = createSelector([filterByName, filterBy], (users, filter) => {
  return users.filter((users) => users.price > filter.priceFrom && users.price < filter.priceTo);
});
