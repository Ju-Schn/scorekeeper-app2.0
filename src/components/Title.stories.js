import Title from './Title';

export default {
  title: 'components/Title',
  component: Title,
  argTypes: {},
};

const Template = args => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'I am title',
};
