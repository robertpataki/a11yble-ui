import { ReactNode } from 'react';

import { BaseComponentProps } from '@global/global.type';

export interface Props extends BaseComponentProps {
  id: string;
  accessibleTitle: string;
  selectedTabIndex: number;
  tabbedSections: TabbedSectionProps[];
}

export interface TabbedSectionProps extends BaseComponentProps {
  title: string;
  children: ReactNode;
}
