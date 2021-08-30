import React from 'react';

import Pagination, { Theme, Color } from '../src';

export default {
  title: 'Theme: Block',
  component: Pagination,
};

const Template = (args) =>  (
  <Pagination
    page={4} 
    total={999} 
    perPage={10} 
    marginNumbersDisplayed={0}
    numbersDisplayed={6} 
    {...args} 
  />
);

export const Default = Template.bind({});
Default.args = {
  theme: Theme.BLOCK,
  color: Color.DEFAULT
};

export const Light = Template.bind({});
Light.args = {
  theme: Theme.BLOCK,
  color: Color.LIGHT
};

export const Dark = Template.bind({});
Dark.args = {
  theme: Theme.BLOCK,
  color: Color.DARK
};

export const Red = Template.bind({});
Red.args = {
  theme: Theme.BLOCK,
  color: Color.RED
};

export const Blue = Template.bind({});
Blue.args = {
  theme: Theme.BLOCK,
  color: Color.BLUE
};

export const Green = Template.bind({});
Green.args = {
  theme: Theme.BLOCK,
  color: Color.GREEN
};

export const Orange = Template.bind({});
Orange.args = {
  theme: Theme.BLOCK,
  color: Color.ORANGE
};
