/**
 * @jest-environment jsdom
 */
import { mount } from 'enzyme';

import Numbers from '../Numbers';
import Button from '../Button';
import StyleManager from '../StyleManager';

const onChangeSpy = jest.fn();
const styler = new StyleManager({
  useClassname: true,
});
const renderComponent = (props = {}) => {
  const wrapper = mount(
    <Numbers   
      styler={styler}
      page={1}
      pagesTotal={100}
      onChange={onChangeSpy}
      numbersDisplayed={5}
      {...props} 
    />,
  );

  return wrapper;
};

describe('<Numbers />', () => {
  it('should render all buttons correctly (main numbers = 4 & more button = 1)', () => {
    const displayed = 4;
    const renderedComponent = renderComponent({
      numbersDisplayed: displayed,
    });
    expect(renderedComponent.find(Button)).toHaveLength(displayed + 1);
  });

  it('should render all buttons correctly (main numbers = 4)', () => {
    const displayed = 4;
    const renderedComponent = renderComponent({
      numbersDisplayed: displayed,
      marginNumbersDisplayed: 0,
    });
    expect(renderedComponent.find(Button)).toHaveLength(displayed);
  });

  it('should render all buttons correctly when pages total < numbers displayed', () => {
    const displayed = 4;
    const renderedComponent = renderComponent({
      pagesTotal: 2,
      numbersDisplayed: displayed,
    });
    expect(renderedComponent.find(Button)).toHaveLength(2);
  });

  it('should render right ellipsis', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('.pagination__ellipsis')).toHaveLength(1);
  });

  it('should render left & right ellipsis when page = 8', () => {
    const renderedComponent = renderComponent({
      page: 8,
    });
    expect(renderedComponent.find('.pagination__ellipsis')).toHaveLength(2);
  });

  it('should not render ellipsis when hideEllipsis = false', () => {
    const renderedComponent = renderComponent({
      hideEllipsis: true,
    });
    expect(renderedComponent.find('.pagination__ellipsis')).toHaveLength(0);
  });

  it('should not render ellipsis when pages total < numbers displayed', () => {
    const displayed = 4;
    const renderedComponent = renderComponent({
      pagesTotal: 2,
      numbersDisplayed: displayed,
    });
    expect(renderedComponent.find('.pagination__ellipsis')).toHaveLength(0);
  });

  it('should just render ellipsis when marginNumbersDisplayed = 0', () => {
    const displayed = 4;
    const renderedComponent = renderComponent({
      page: 7,
      marginNumbersDisplayed: 0,
      numbersDisplayed: displayed,
    });
    expect(renderedComponent.find('.pagination__ellipsis')).toHaveLength(2);
    expect(renderedComponent.find(Button)).toHaveLength(displayed);
  });

  it('should call onChangeSpy when button is clicked', () => {
    const renderedComponent = renderComponent();
    renderedComponent.find(Button).at(0).props().onChange();
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('should render custom ellipsis', () => {
    const ellipsis = '<strong>...</strong>';
    const renderedComponent = renderComponent({
      ellipsis,
    });
    expect(renderedComponent.contains(ellipsis)).toBe(true);
  });

  it('should render correctly for custom marginNumbersDisplayed (buttons + left & right ellipsis)', () => {
    const displayed = 4;
    const margin = 3;
    const renderedComponent = renderComponent({
      page: 5,
      pagesTotal: 20,
      marginNumbersDisplayed: margin,
      numbersDisplayed: displayed,
    });
    expect(renderedComponent.find(Button)).toHaveLength(9);
  });

  it('should render correctly for custom marginNumbersDisplayed (buttons + left & right ellipsis)', () => {
    const displayed = 4;
    const margin = 3;
    const renderedComponent = renderComponent({
      page: 16,
      pagesTotal: 20,
      marginNumbersDisplayed: margin,
      numbersDisplayed: displayed,
    });
    expect(renderedComponent.find(Button)).toHaveLength(9);
  });

  it('should render correctly when page == pagesTotal', () => {
    const displayed = 4;
    const renderedComponent = renderComponent({
      page: 20,
      pagesTotal: 20,
      marginNumbersDisplayed: 0,
      numbersDisplayed: displayed,
    });
    expect(renderedComponent.find(Button)).toHaveLength(displayed);
  });

  it('should handle correctly when page > pagesTotal', () => {
    const renderedComponent = renderComponent({
      page: 10,
      pagesTotal: 2,
    });
    expect(renderedComponent.find(Button)).toHaveLength(2);
  });

  it('should `ariaLabel` property is used properly', () => {
    const renderedComponent = renderComponent({
      page: 1,
      hideEllipsis: true,
      numbersDisplayed: 3,
      ariaLabel: {
        number: 'Go {page}',

      }
    });
    expect(renderedComponent.find(Button).at(0).prop('ariaLabel')).toEqual('Go 1');
    expect(renderedComponent.find(Button).at(1).prop('ariaLabel')).toEqual('Go 2');
    expect(renderedComponent.find(Button).at(2).prop('ariaLabel')).toEqual('Go 3');
  });
});