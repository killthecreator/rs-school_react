import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from './../../redux/store';

import Form from '../../components/Form/Form';
import Cards from '../../components/Cards/Cards';

const Formpage = () => {
  const { activeCards } = useSelector((state: RootState) => state.formpage);

  return (
    <main>
      <Form />
      <Cards cards={activeCards} />
    </main>
  );
};

export default Formpage;
