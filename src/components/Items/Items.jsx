import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getUsers, setPage } from './actions.js';
import InfoCard from './InfoCard.jsx';
import { filteredUsers } from './selector';
import { sliceUser } from './utils';
//Pagination
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css';

function Items() {
  const dispatch = useDispatch();
  const users = useSelector(filteredUsers);
  const page = useSelector((state) => state.setPage.page);

  React.useEffect(() => {
    dispatch(getUsers());
  }, []);

  const changeCurrentPage = (numPage) => {
    dispatch(setPage(numPage));
  };
  return (
    <div className='items'>
      <div className='items__title'>Список товаров</div>

      <div className='items__list'>
        {users &&
          users
            .slice(sliceUser(page).start, sliceUser(page).end)
            .map((obj, index) => <InfoCard key={`${obj.id}_${index}`} {...obj} />)}
      </div>
      <div className='items__pagination'>
        <Pagination
          color='white'
          currentPage={page}
          totalPages={Math.ceil(users.length / 4)}
          changeCurrentPage={changeCurrentPage}
          theme='bottom-border'
        />
      </div>
    </div>
  );
}

export default Items;
