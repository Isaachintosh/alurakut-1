import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '.';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => (
  <Card>
    <h1>Conteúdo</h1>
  </Card>
);

export const Default = Template.bind({});
