import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileSummary } from '.';

export default {
  title: 'Components/ProfileSummary',
  component: ProfileSummary,
} as ComponentMeta<typeof ProfileSummary>;

const Template: ComponentStory<typeof ProfileSummary> = () => (
  <ProfileSummary />
);

export const Default = Template.bind({});
