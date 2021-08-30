import React, { useState } from 'react';
import Pagination, { Theme, Color } from '../../../src';

import { H2, H3 } from '../../components/Title';
// import Styles from './Styles.scss';

const Home: React.FC = () => {
  const [page, setPage] = useState(4);

  return (
    <div>
      <H2>Theme: Default</H2>
      <br />
      <H3>Color: Default</H3>
      <Pagination
        page={page} 
        total={10}  
        perPage={8} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.DEFAULT}
        color={Color.DEFAULT}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Light</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.DEFAULT}
        color={Color.LIGHT}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Dark</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.DEFAULT}
        color={Color.DARK}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Red</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.DEFAULT}
        color={Color.RED}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Blue</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.DEFAULT}
        color={Color.BLUE}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Green</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.DEFAULT}
        color={Color.GREEN}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Orange</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.DEFAULT}
        color={Color.ORANGE}
        onChange={(page: number) => setPage(page)}
      />

      <br />
      <br />
      <br />
      <H2>Theme: Line</H2>
      <br />
      <H3>Color: Default</H3>
      <Pagination
        page={page} 
        total={10}  
        perPage={8} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.LINE}
        color={Color.DEFAULT}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Light</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.LINE}
        color={Color.LIGHT}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Dark</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.LINE}
        color={Color.DARK}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Red</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.LINE}
        color={Color.RED}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Blue</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.LINE}
        color={Color.BLUE}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Green</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.LINE}
        color={Color.GREEN}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Orange</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.LINE}
        color={Color.ORANGE}
        onChange={(page: number) => setPage(page)}
      />
      
      <br />
      <br />
      <br />
      <H2>Theme: Block</H2>
      <br />
      <H3>Color: Default</H3>
      <Pagination
        page={page} 
        total={10}  
        perPage={8} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.BLOCK}
        color={Color.DEFAULT}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Light</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.BLOCK}
        color={Color.LIGHT}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Dark</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.BLOCK}
        color={Color.DARK}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Red</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.BLOCK}
        color={Color.RED}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Blue</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.BLOCK}
        color={Color.BLUE}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Green</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.BLOCK}
        color={Color.GREEN}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Orange</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.BLOCK}
        color={Color.ORANGE}
        onChange={(page: number) => setPage(page)}
      />
      
      <br />
      <br />
      <br />
      <H2>Theme: Buttons</H2>
      <br />
      <H3>Color: Default</H3>
      <Pagination
        page={page} 
        total={10}  
        perPage={8} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.BUTTONS}
        color={Color.DEFAULT}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Light</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.BUTTONS}
        color={Color.LIGHT}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Dark</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.BUTTONS}
        color={Color.DARK}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Red</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.BUTTONS}
        color={Color.RED}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Blue</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.BUTTONS}
        color={Color.BLUE}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Green</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.BUTTONS}
        color={Color.GREEN}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />

      <H3>Color: Orange</H3>
      <Pagination
        page={page} 
        total={999} 
        perPage={10} 
        marginNumbersDisplayed={0}
        numbersDisplayed={6}
        theme={Theme.BUTTONS}
        color={Color.ORANGE}
        onChange={(page: number) => setPage(page)}
      />
      <br />
      <br />
    </div>
  ); 
};

export default Home;
