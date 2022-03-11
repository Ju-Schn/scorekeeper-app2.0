import Input from './Input';

export default {
  title: 'components/Input',
  component: Input,
  argTypes: {
    onChange: 'onChange',
  },
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'I am Input',
  onChange: 'onChange',
  description: 'I am description',
};
