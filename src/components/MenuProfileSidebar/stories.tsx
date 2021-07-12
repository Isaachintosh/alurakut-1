import { ComponentMeta, ComponentStory } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { MenuProfileSidebar } from '.';

export default {
  title: 'Components/MenuProfileSidebar',
  component: MenuProfileSidebar,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof MenuProfileSidebar>;

const Template: ComponentStory<typeof MenuProfileSidebar> = ({
  githubUser,
  isOpen,
}) => <MenuProfileSidebar githubUser={githubUser} isOpen={isOpen} />;

export const Default = Template.bind({});
Default.args = {
  githubUser: 'brfeitoza',
  isOpen: true,
};
