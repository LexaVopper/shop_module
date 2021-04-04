import React from 'react';
import { useHistory } from 'react-router-dom';

function Modal_AddUser() {
  const history = useHistory();
  const goBack = () => {
    history.push('/');
  };
  return (
    <div className='modal__block'>
      <div className='modal__content'>
        <div>
          <button type='button' onClick={goBack}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal_AddUser;
