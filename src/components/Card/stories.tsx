import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Card } from '.';
import theme from '../../styles/theme';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = () => (
  <Card>
    <h1>Card content</h1>
  </Card>
);

export const Default = Template.bind({});
