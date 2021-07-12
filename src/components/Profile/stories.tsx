import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Profile } from '.';

export default {
  title: 'Components/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = ({ githubUser }) => (
  <div style={{ maxWidth: 400, maxHeight: 400 }}>
    <Profile githubUser={githubUser} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  githubUser: 'brfeitoza',
};
