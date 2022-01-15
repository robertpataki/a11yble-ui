import { CSSProperties } from 'react';

export interface BaseComponentProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  'data-testid'?: string;
}
