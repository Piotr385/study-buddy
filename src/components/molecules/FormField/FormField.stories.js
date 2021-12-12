import FormField from './FormField';

export default {
  title: 'components/molecules/FormField',
  component: FormField,
  argTypes: {
    label: {
      defaultValue: 'Login',
      type: 'text',
    },
    type: {
      defaultValue: 'text',
      type: 'text',
    },
  },
};

const Template = (args) => <FormField name="story" id="story" {...args} />;

export const Default = Template.bind([]);
Default.args = {
  label: 'Login',
};
