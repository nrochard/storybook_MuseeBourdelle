import { createHeadline } from './Headline';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Tokens/Headline',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: 'text' },
    type:  { control: 'text' },
    bold: { control: 'boolean' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createHeadline({ label, ...args });
};

export const H1 = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
H1.args = {
  label: 'Le Musée Bourdelle',
  type: "h1"
};

export const H2 = Template.bind({});
H2.args = {
    label: 'change de peau',
    type: "h2"
};

export const H3 = Template.bind({});
H3.args = {
    label: 'change de peau',
    type: "h2"
};

export const H4 = Template.bind({});
H4.args = {
    label: 'Venez visiter le musée',
    type: "h4"
};

export const H5 = Template.bind({});
H5.args = {
    label: 'seul ou en groupe',
    type: "h5"
};

export const text1 = Template.bind({});
text1.args = {
  label: 'Le Musée Bourdelle',
  type: "text1",
    bold: true
};

export const text2 = Template.bind({});
text2.args = {
  label: 'Le Musée Bourdelle',
  type: "text2",
  bold: true
};

export const text3 = Template.bind({});
text3.args = {
  label: 'Le Musée Bourdelle',
  type: "text3",
  bold: true
};


export const text4 = Template.bind({});
text4.args = {
  label: 'Le Musée Bourdelle',
  type: "text4",
  bold: true
};


export const text5 = Template.bind({});
text5.args = {
  label: 'Le Musée Bourdelle',
  type: "text5",
  bold: true
};
