import React, { useState } from 'react';
import Pagination from '../../../src';
import { Theme, Color, Size } from '../../../src/types';

import { H2, H3 } from '../../components/Title';
// import Styles from './Styles.scss';

export interface Props {
  /**
   * The theme/style of the pagination buttons.
   */
  theme?: Theme,
  /**
   * The color of the pagination buttons.
   */
  color?: Color,
  /**
   * The size of the pagination buttons.
   */
  size?: Size,
}

const NextPrevPagin: React.FC<Props> = (props) => {
  const perPage = 10;
  const total = 999;
  const totalPages = Math.round(total/perPage);
  const [page, setPage] = useState(4);

  return (
    <Pagination
      page={page}
      total={total} 
      perPage={perPage} 
      marginNumbersDisplayed={0}
      numbersDisplayed={0}
      hideNumbers
      firstLastButton={false}
      onChange={(page: number) => setPage(page)}
      {...props}
    >
      <strong>{`${page}/${totalPages}`}</strong>
    </Pagination>
  );
};

const NextPrev: React.FC = () => {
  return (
    <div>
      <H2>Theme: Default</H2>
      <br />
      <H3>Color: Default</H3>
      <NextPrevPagin
        theme={Theme.DEFAULT}
        color={Color.DEFAULT}
      />
      <br />
      <br />

      <H3>Color: Light</H3>
      <NextPrevPagin
        theme={Theme.DEFAULT}
        color={Color.LIGHT}
      />
      <br />
      <br />

      <H3>Color: Dark</H3>
      <NextPrevPagin
        theme={Theme.DEFAULT}
        color={Color.DARK}
      />
      <br />
      <br />

      <H3>Color: Red</H3>
      <NextPrevPagin
        theme={Theme.DEFAULT}
        color={Color.RED}
      />
      <br />
      <br />

      <H3>Color: Blue</H3>
      <NextPrevPagin
        theme={Theme.DEFAULT}
        color={Color.BLUE}
      />
      <br />
      <br />

      <H3>Color: Green</H3>
      <NextPrevPagin
        theme={Theme.DEFAULT}
        color={Color.GREEN}
      />
      <br />
      <br />

      <H3>Color: Orange</H3>
      <NextPrevPagin
        theme={Theme.DEFAULT}
        color={Color.ORANGE}
      />

      <br />
      <br />
      <br />
      <H2>Theme: Line</H2>
      <br />
      <H3>Color: Default</H3>
      <NextPrevPagin
        theme={Theme.LINE}
        color={Color.DEFAULT}
      />
      <br />
      <br />

      <H3>Color: Light</H3>
      <NextPrevPagin
        theme={Theme.LINE}
        color={Color.LIGHT}
      />
      <br />
      <br />

      <H3>Color: Dark</H3>
      <NextPrevPagin
        theme={Theme.LINE}
        color={Color.DARK}
      />
      <br />
      <br />

      <H3>Color: Red</H3>
      <NextPrevPagin
        theme={Theme.LINE}
        color={Color.RED}
      />
      <br />
      <br />

      <H3>Color: Blue</H3>
      <NextPrevPagin
        theme={Theme.LINE}
        color={Color.BLUE}
      />
      <br />
      <br />

      <H3>Color: Green</H3>
      <NextPrevPagin
        theme={Theme.LINE}
        color={Color.GREEN}
      />
      <br />
      <br />

      <H3>Color: Orange</H3>
      <NextPrevPagin
        theme={Theme.LINE}
        color={Color.ORANGE}
      />
      
      <br />
      <br />
      <br />
      <H2>Theme: Block</H2>
      <br />
      <H3>Color: Default</H3>
      <NextPrevPagin
        theme={Theme.BLOCK}
        color={Color.DEFAULT}
      />
      <br />
      <br />

      <H3>Color: Light</H3>
      <NextPrevPagin
        theme={Theme.BLOCK}
        color={Color.LIGHT}
      />
      <br />
      <br />

      <H3>Color: Dark</H3>
      <NextPrevPagin
        theme={Theme.BLOCK}
        color={Color.DARK}
      />
      <br />
      <br />

      <H3>Color: Red</H3>
      <NextPrevPagin
        theme={Theme.BLOCK}
        color={Color.RED}
      />
      <br />
      <br />

      <H3>Color: Blue</H3>
      <NextPrevPagin
        theme={Theme.BLOCK}
        color={Color.BLUE}
      />
      <br />
      <br />

      <H3>Color: Green</H3>
      <NextPrevPagin
        theme={Theme.BLOCK}
        color={Color.GREEN}
      />
      <br />
      <br />

      <H3>Color: Orange</H3>
      <NextPrevPagin
        theme={Theme.BLOCK}
        color={Color.ORANGE}
      />
      
      <br />
      <br />
      <br />
      <H2>Theme: Buttons</H2>
      <br />
      <H3>Color: Default</H3>
      <NextPrevPagin
        theme={Theme.BUTTONS}
        color={Color.DEFAULT}
      />
      <br />
      <br />

      <H3>Color: Light</H3>
      <NextPrevPagin
        theme={Theme.BUTTONS}
        color={Color.LIGHT}
      />
      <br />
      <br />

      <H3>Color: Dark</H3>
      <NextPrevPagin
        theme={Theme.BUTTONS}
        color={Color.DARK}
      />
      <br />
      <br />

      <H3>Color: Red</H3>
      <NextPrevPagin
        theme={Theme.BUTTONS}
        color={Color.RED}
      />
      <br />
      <br />

      <H3>Color: Blue</H3>
      <NextPrevPagin
        theme={Theme.BUTTONS}
        color={Color.BLUE}
      />
      <br />
      <br />

      <H3>Color: Green</H3>
      <NextPrevPagin
        theme={Theme.BUTTONS}
        color={Color.GREEN}
      />
      <br />
      <br />

      <H3>Color: Orange</H3>
      <NextPrevPagin
        theme={Theme.BUTTONS}
        color={Color.ORANGE}
      />
      <br />
      <br />
    </div>
  ); 
};

export default NextPrev;
