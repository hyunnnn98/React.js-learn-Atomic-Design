import React from 'react';
import Header from './../components/organisms/Header/index';
import useUser from '../hooks/useUser';

const InfoPage = () => {
  const { languageData } = useUser();

  return (
    <div>
      <div>{languageData}</div>
      <Header />
    </div>
  );
};

export default InfoPage;
