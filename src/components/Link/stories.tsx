import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from '.';

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = ({ href }) => (
  <Link href={href}>
    <p>Link example</p>
  </Link>
);

export const Default = Template.bind({});
Default.args = {
  href: 'https://google.com',
};
