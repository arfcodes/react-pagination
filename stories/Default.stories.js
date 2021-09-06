import React from 'react';

import Pagination, { Color } from '../src';

export default {
  title: 'Theme: Default',
  component: Pagination,
};

const Template = (args) =>  (
  <Pagination 
    page={1} 
    total={999} 
    perPage={10} 
    marginNumbersDisplayed={0}
    numbersDisplayed={6} 
    {...args} 
  />
);

export const Default = Template.bind({});
Default.args = {};

export const Light = Template.bind({});
Light.args = {
  color: Color.LIGHT
};

export const Dark = Template.bind({});
Dark.args = {
  color: Color.DARK
};

export const Red = Template.bind({});
Red.args = {
  color: Color.RED
};

export const Blue = Template.bind({});
Blue.args = {
  color: Color.BLUE
};

export const Green = Template.bind({});
Green.args = {
  color: Color.GREEN
};

export const Orange = Template.bind({});
Orange.args = {
  color: Color.ORANGE
};
