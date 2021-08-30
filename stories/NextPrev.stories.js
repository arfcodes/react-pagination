import React from 'react';

import Pagination, { Theme, Color } from '../src';

export default {
  title: 'Next Prev',
  component: Pagination,
};

const Template = (args) =>  (
  <Pagination
    page={1} 
    total={999} 
    perPage={10} 
    marginNumbersDisplayed={0}
    hideNumbers
    firstLastButton={false}
    {...args} 
  >
    <strong>1/90</strong>
  </Pagination>
);

export const Default = Template.bind({});
Default.args = {
  theme: Theme.DEFAULT,
  color: Color.DEFAULT
};

export const Buttons = Template.bind({});
Buttons.args = {
  theme: Theme.BUTTONS,
  color: Color.BLUE
};

export const Line = Template.bind({});
Line.args = {
  theme: Theme.LINE,
  color: Color.GREEN
};

export const Block = Template.bind({});
Block.args = {
  theme: Theme.BLOCK,
  color: Color.RED
};
