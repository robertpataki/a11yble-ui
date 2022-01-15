import { Meta } from '@storybook/react';

import { StoryConfig } from '@global/global.cons';

import README from './TabbedInterface.doc.md';
import TabbedInterface from './TabbedInterface';
import { Props } from './TabbedInterface.type';

export default {
  component: TabbedInterface,
  title: `${StoryConfig.headings.components}/${StoryConfig.headings.organisms}/Tabbed Interface`,
  parameters: {
    docs: {
      description: {
        component: README,
      },
    },
  },
  args: {},
  argTypes: {
    ...StoryConfig.baseComponentArgTypes,
  },
} as Meta;

export const Playground = (args: Props) => <TabbedInterface {...args} />;
