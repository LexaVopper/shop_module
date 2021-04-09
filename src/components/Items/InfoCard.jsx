import React, { useState } from 'react';
import cn from 'classnames';

const InfoCard = React.memo(function InfoCard({ id, description, name, price, imageUrl }) {
  const [state, setActive] = useState(false);

  const toggleActive = () => {
    !state ? setActive(true) : setActive(false);
  };

  return (
    <div className='items__column'>
      <div className='items__info'>
        <div className='items__avatar'>
          <img src={imageUrl} alt='' />
        </div>

        <div className='items__name'>{name}</div>

        <div className='items__prise'>Цена: {price}</div>
      </div>

      <div onClick={() => toggleActive()} className={cn('items-descr', { active: state === true })}>
        <div className='items-descr__title'>Описание</div>
        <div className='items-descr__info'>
          <h1>Id: {id}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
});

export default InfoCard;
