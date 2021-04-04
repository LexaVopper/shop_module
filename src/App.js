import React from 'react';
import Page from './components/Page/Page';
import Modal_AddUser from '../src/components/Modal_AddUser/Modal_AddUser';
import { Route, useHistory } from 'react-router-dom';

import { Dialog } from '@material-ui/core';

function App() {
  const history = useHistory();
  const goBack = () => {
    history.push('/');
  };
  return (
    <div className='wrapper'>
      <Route path='/' component={Page} />
      <Route
        path='/addUser'
        children={({ match }) => (
          <Dialog onClose={goBack} open={Boolean(match)}>
            <Modal_AddUser />
          </Dialog>
        )}
      />
    </div>
  );
}

export default App;
