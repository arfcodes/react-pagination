import React, { useMemo } from 'react';

import { MainProps } from './types';
import StyleManager from './StyleManager';
import Numbers from './Numbers';
import Direction from './Direction';

const Main: React.FC<MainProps> = (props) => {
  const { 
    page, 
    total,
    perPage,
    onChange,
    theme, 
    color, 
    size, 
    styles, 
    useClassname,
    ariaLabel,
    hideNumbers,
    numbersDisplayed,
    marginNumbersDisplayed,
    ellipsis,
    children,
    firstLastButton,
    firstButtonLabel,
    lastButtonLabel,
    prevButtonLabel,
    nextButtonLabel,
  } = props;
  
  const perPageVal = perPage || 10;
  const pagesTotal = Math.ceil(total/perPageVal);
  // const [pagesTotal, setPagesTotal] = useState(Math.ceil(total/perPage));

  // useEffect(() => {
  //   setPagesTotal(Math.ceil(total/perPage));
  // }, []);

  const styler = useMemo(() => {
    return new StyleManager({ 
      theme, 
      color, 
      size, 
      customStyles: styles, 
      useClassname,
    });
  }, []);

  if (pagesTotal > 1) {
    return (
      <div className={styler.classes('root')}>
        <div className={styler.classes('main')}>
          <Direction 
            page={page} 
            pagesTotal={pagesTotal} 
            styler={styler} 
            onChange={onChange}
            ariaLabel={ariaLabel}
            firstLastButton={firstLastButton === undefined ? true : firstLastButton}
            firstButtonLabel={firstButtonLabel}
            lastButtonLabel={lastButtonLabel}
            nextButtonLabel={nextButtonLabel}
            prevButtonLabel={prevButtonLabel}
          >
            <>
              {!hideNumbers && (
                <Numbers 
                  styler={styler} 
                  page={page}
                  pagesTotal={pagesTotal}
                  numbersDisplayed={numbersDisplayed || 5}
                  marginNumbersDisplayed={marginNumbersDisplayed}
                  ellipsis={ellipsis}
                  ariaLabel={ariaLabel}
                  onChange={onChange}
                />
              )}
              {children && <div className={styler.classes('info')}>{children}</div>}
            </>
          </Direction>
        </div>
      </div>
    );
  }
  return null;
}

export default Main;
