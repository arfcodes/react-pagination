/**
 * @jest-environment jsdom
 */
import { shallow } from 'enzyme';

import Main from '../Main';
import Direction from '../Direction';
import Numbers from '../Numbers';

const onChangeMock = jest.fn();
const renderComponent = (props = {}) => {
  const wrapper = shallow(
    <Main page={1} total={100} onChange={onChangeMock} {...props} />,
  );

  return wrapper;
};

describe('<Main />', () => {
  it('should render <Direction /> components', () => {
    const wrapper = renderComponent();
    expect(wrapper.find(Direction)).toHaveLength(1);
  });

  it('should render <Numbers /> components', () => {
    const wrapper = renderComponent();
    expect(wrapper.find(Numbers)).toHaveLength(1);
  });

  it('should not render pagination when total < per page', () => {
    const wrapper = renderComponent({
      total: 5,
      perPage: 12,
    });
    expect(wrapper.find(Numbers)).toHaveLength(0);
  });

  it('should not render <Numbers /> when hideNumbers set to true', () => {
    const wrapper = renderComponent({
      hideNumbers: true,
    });
    expect(wrapper.find(Numbers)).toHaveLength(0);
  });

  it('shouldrender <Numbers /> when hideNumbers set to true', () => {
    const wrapper = renderComponent({
      hideNumbers: true,
    });
    expect(wrapper.find(Numbers)).toHaveLength(0);
  });

  it('should render child node', () => {
    const content = <div>slide1</div>;
    const wrapper = shallow(
      <Main page={1} total={100} onChange={onChangeMock}>
        {content}
      </Main>
    );
    expect(wrapper.contains(content)).toBe(true);
  });

  it("should `firstLastButton` property is used properly", () => {
    const wrapper = renderComponent({
      firstLastButton: false,
    });
    expect(wrapper.find(Direction).prop('firstLastButton')).toBe(false);
  })
});