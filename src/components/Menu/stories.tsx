import { ComponentMeta, ComponentStory } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Menu } from '.';

export default {
  title: 'Components/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = ({ githubUser }) => (
  <Menu githubUser={githubUser} />
);

export const Desktop = Template.bind({});
Desktop.args = {
  githubUser: 'brfeitoza',
};

export const Mobile = Template.bind({});
Mobile.args = {
  githubUser: 'brfeitoza',
};

Mobile.parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
};
