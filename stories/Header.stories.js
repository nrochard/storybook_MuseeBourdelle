import { createHeader } from './Header';

export default {
  title: 'Components/Header',
};

const Template = (args) => createHeader(args);

export const Header = Template.bind({});
Header.args = {};
