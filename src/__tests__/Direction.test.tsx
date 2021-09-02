/**
 * @jest-environment jsdom
 */
import { mount } from 'enzyme';

import Direction from '../Direction';
import Button from '../Button';
import StyleManager from '../StyleManager';

const content = <div>numbers</div>
const onChangeSpy = jest.fn();
const styler = new StyleManager({
  useClassname: true,
});
const renderComponent = (props = {}) => {
  const wrapper = mount(
    <Direction   
      styler={styler}
      page={1}
      pagesTotal={10}
      onChange={onChangeSpy}
      firstLastButton
      {...props} 
    >
      {content}
    </Direction>,
  );

  return wrapper;
};

describe('<Direction />', () => {
  it('should render all directory buttons', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Button)).toHaveLength(4);
  });

  it('should not render first & last buttons', () => {
    const renderedComponent = renderComponent({
      firstLastButton: false,
    });
    expect(renderedComponent.find(Button)).toHaveLength(2);
  });

  it('should call onChangeSpy when button is clicked', () => {
    const renderedComponent = renderComponent();
    renderedComponent.find(Button).at(0).props().onChange();
    renderedComponent.find(Button).at(1).props().onChange();
    renderedComponent.find(Button).at(2).props().onChange();
    renderedComponent.find(Button).at(3).props().onChange();
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('should `ariaLabel` property is used properly', () => {
    const nextLabel = 'Go next';
    const prevLabel = 'Go prev';
    const firstLabel = 'Go first';
    const lastLabel = 'Go last';
    const renderedComponent = renderComponent({
      ariaLabel: {
        next: nextLabel,
        prev: prevLabel,
        first: firstLabel,
        last: lastLabel,
      }
    });
    expect(renderedComponent.find(Button).at(0).prop('ariaLabel')).toEqual(firstLabel);
    expect(renderedComponent.find(Button).at(1).prop('ariaLabel')).toEqual(prevLabel);
    expect(renderedComponent.find(Button).at(2).prop('ariaLabel')).toEqual(nextLabel);
    expect(renderedComponent.find(Button).at(3).prop('ariaLabel')).toEqual(lastLabel);
  });

  it('should disable the first & prev when page === 1', () => {
    const renderedComponent = renderComponent({
      page: 1,
    });
    expect(renderedComponent.find(Button).at(0).prop('disabled')).toEqual(true);
    expect(renderedComponent.find(Button).at(1).prop('disabled')).toEqual(true);
  });

  it('should disable the last & next when page === totalPages', () => {
    const renderedComponent = renderComponent({
      page: 10,
      totalPages: 10,
    });
    expect(renderedComponent.find(Button).at(2).prop('disabled')).toEqual(true);
    expect(renderedComponent.find(Button).at(3).prop('disabled')).toEqual(true);
  });

  it('should render child node', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(content)).toBe(true);
  });
});