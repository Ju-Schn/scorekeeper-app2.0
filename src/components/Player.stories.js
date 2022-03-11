import Player from './Player';

export default {
  title: 'components/Player',
  component: Player,
};

const Template = args => <Player {...args} />;

//Erzeugt Kopie von Template:
export const Default = Template.bind({});

Default.args = {
  name: 'Player',
  score: 0,
};
