/**
 * @jest-environment jsdom
 */
import { mount } from 'enzyme';

import Pagination from '..';
import Main from '../Main';
 
const onChangeMock = jest.fn();
 
describe('<Pagination />', () => {
  it('render <Main /> components', () => {
    const wrapper = mount(
      <Pagination page={1} total={100} onChange={onChangeMock} />,
    );
    expect(wrapper.find(Main)).toHaveLength(1);
  });
});