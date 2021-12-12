import TextButton from './TextButton';

export default {
  title: 'components/atoms/TextButton',
  component: TextButton,
  argTypes: {
    type: {
      defaultValue: 'button',
      type: 'text',
    },
    to: {
      defaultValue: '',
      type: 'text',
    },
  },
};

const Template = (args) => <TextButton {...args}>Read More</TextButton>;

export const Default = Template.bind([]);

export const isBig = Template.bind([]);
isBig.args = {
  isBig: true,
};
