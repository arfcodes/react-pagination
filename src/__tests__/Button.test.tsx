/**
 * @jest-environment jsdom
 */
import { shallow } from 'enzyme';

import Button from '../Button';
import StyleManager from '../StyleManager';

const ariaLabel = 'Click me'
const label = 'Click me';
const onChangeSpy = jest.fn();
const styler = new StyleManager({
  useClassname: true,
});
const renderComponent = (props = {}) => {
  const wrapper = shallow(
    <Button 
      styler={styler}
      name="button" 
      ariaLabel={ariaLabel}
      onChange={onChangeSpy}
      {...props} 
    >
      {label}
    </Button>,
  );

  return wrapper;
};
 
describe('<Button />', () => {
  it('should render a button', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.type()).toEqual('button');
  });

  it('should call onChangeSpy when button is clicked', () => {
    const renderedComponent = renderComponent();
    renderedComponent.simulate('click', {
      preventDefault: () => true,
    });
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('should have proper class name for directory button', () => {
    const renderedComponent = renderComponent({
      name: 'buttonFirst',
    });
    expect(renderedComponent.hasClass('pagination__buttonDirectory')).toBe(true);
  });

  it('should have proper class name for number button', () => {
    const renderedComponent = renderComponent({
      name: 'buttonNumber',
    });
    expect(renderedComponent.hasClass('pagination__buttonDirectory')).not.toBe(true);
  });

  it('should have proper class name when button is active', () => {
    const renderedComponent = renderComponent({
      active: true,
    });
    expect(renderedComponent.hasClass('pagination__buttonActive')).toBe(true);
  });

  it('should not have active class name when button is not active', () => {
    const renderedComponent = renderComponent({
      active: false,
    });
    expect(renderedComponent.hasClass('pagination__buttonActive')).toBe(false);
  });

  it('should have proper property when button is disabled', () => {
    const renderedComponent = renderComponent({
      disabled: true,
    });
    expect(renderedComponent.prop('disabled')).toEqual(true);
  });
});