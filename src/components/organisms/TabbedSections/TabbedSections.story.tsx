import { Meta } from '@storybook/react';

import { StoryConfig } from '@global/global.cons';

import README from './TabbedSections.doc.md';
import TabbedSections from './TabbedSections';
import { Props } from './TabbedSections.type';
import { MOCK_DATA_GHIBLI } from './TabbedSections.mock';

export default {
  component: TabbedSections,
  title: `${StoryConfig.headings.components}/${StoryConfig.headings.organisms}/Tabbed Sections`,
  parameters: {
    docs: {
      description: {
        component: README,
      },
    },
  },
  args: {
    ...MOCK_DATA_GHIBLI,
  },
  argTypes: {
    selectedTabIndex: {
      description: 'The 0 based index of the initially selected tab.',
      tabs: 'An array of tabs, which correspond to the appropriate tabpanels.',
      tabPanels:
        'An array of tab panels, which correspond to the appropriate tabs.',
    },
    ...StoryConfig.baseComponentArgTypes,
  },
} as Meta;

export const Playground = (args: Props) => <TabbedSections {...args} />;
