import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    onClick: 'onClick',
  },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me',
};

export const Active = Template.bind({});
Active.args = {
  children: 'Click me',
  variant: 'active',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Click me',
  variant: 'danger',
};

export const Submit = Template.bind({});
Submit.args = {
  children: 'Click me',
  variant: 'submit',
};
