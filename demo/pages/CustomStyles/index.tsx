import React, { useState } from 'react';
import Pagination, { Theme, Color } from '../../../src';

import { H2 } from '../../components/Title';
import ThemeStyles from './Theme.scss';
import CustomStyles from './Styles.scss';

const NextPrev: React.FC = () => {
  const [pageA, setPageA] = useState(4);
  const [pageB, setPageB] = useState(1);

  return (
    <div>
      <H2>Custom Theme</H2>
      <Pagination
        page={pageA}
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={1}
        numbersDisplayed={5}
        firstButtonLabel="&laquo;"
        lastButtonLabel="&raquo;"
        prevButtonLabel="&lt;"
        nextButtonLabel="&gt;"
        onChange={(page: number) => setPageA(page)}
        theme={Theme.BUTTONS}
        color={Color.BLUE}
        styles={ThemeStyles}
      />
      <br />
      <br />
      <br />

      <H2>Custom Style</H2>
      <Pagination
        page={pageB}
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={1}
        numbersDisplayed={5}
        firstButtonLabel="&laquo;"
        lastButtonLabel="&raquo;"
        prevButtonLabel="&lt;"
        nextButtonLabel="&gt;"
        onChange={(page: number) => setPageB(page)}
        theme={Theme.CUSTOM}
        styles={CustomStyles}
      />
    </div>
  ); 
};

export default NextPrev;
