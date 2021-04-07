import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../Items/actions';

function Modal_AddUser() {
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const goBack = () => {
    history.push('/');
  };

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const newUser = {
      id: users.length,
      imageUrl: URL.createObjectURL(data.avatar[0]),
      name: data.name,
      description: data.descr,
      price: +data.price,
    };
    dispatch(addUser(newUser));
  };

  return (
    <div className='modal__block'>
      <div className='modal__content'>
        <span onClick={goBack}>X</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Картинка Товара</p>
          <input name='avatar' type='file' ref={register({ required: false })} />

          <p>Название товара</p>
          <input name='name' defaultValue='Неизвестный объект' ref={register({ required: true })} />

          <p>Цена</p>
          <input
            name='price'
            ref={register({
              required: 'Укажите цену цифрами',
              pattern: { value: /^\d+$/, message: 'Это поле принимает только цифры' },
            })}
          />
          {errors?.price?.message}

          <p>Описание</p>
          <textarea name='descr' defaultValue='Описание отсутствует(' type='text' ref={register} />

          <Input className='submit' type='submit' />
        </form>
      </div>
    </div>
  );
}

export default Modal_AddUser;
