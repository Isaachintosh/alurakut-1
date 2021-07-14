import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListInterests } from '.';
import peopleMock from 'mocks/people.json';

export default {
  title: 'Components/ListInterests',
  component: ListInterests,
} as ComponentMeta<typeof ListInterests>;

const Template: ComponentStory<typeof ListInterests> = () => (
  <div style={{ maxWidth: 468 }}>
    <ListInterests
      title={`Pessoas da comunidade (${peopleMock.length})`}
      data={peopleMock.map((pessoa) => ({
        key: pessoa,
        href: `/users/${pessoa}`,
        imageSrc: `https://github.com/${pessoa}.png`,
        title: pessoa,
      }))}
    />
  </div>
);

export const Default = Template.bind({});
