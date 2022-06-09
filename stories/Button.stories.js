import { createButton } from './Button';

export default {
  title: 'Components/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Bouton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Bouton',
};

