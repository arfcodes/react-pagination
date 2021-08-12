import React from 'react';

import Pagination from '../src';

export default {
  title: 'Basic',
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: 'simple',
};
