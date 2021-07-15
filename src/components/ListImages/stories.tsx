import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListImages } from '.';
import photosMock from 'mocks/photos.json';

export default {
  title: 'Components/ListImages',
  component: ListImages,
} as ComponentMeta<typeof ListImages>;

const Template: ComponentStory<typeof ListImages> = () => (
  <div style={{ maxWidth: 468 }}>
    <ListImages data={photosMock.map((photo) => photo)} onClick={() => {}} />
  </div>
);

export const Default = Template.bind({});
