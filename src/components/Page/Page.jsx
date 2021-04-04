import React from 'react';

import Filter from '../Filter/Filter';
import Items from '../Items/Items';

function Page() {
  return (
    <div className='container'>
      <div className='content'>
        <Filter />
        <Items />
      </div>
    </div>
  );
}

export default Page;
