import * as React from 'react';

import { BsPrefixComponent } from './helpers';

export interface SafeAnchorProps {
  href?: string;
  onClick?: React.MouseEventHandler<this>;
  onKeyDown?: React.KeyboardEventHandler<this>;
  disabled?: boolean;
  role?: string;
  tabIndex: number | string;
}

declare class SafeAnchor<
  As extends React.ElementType = 'a'
> extends BsPrefixComponent<As, SafeAnchorProps> {}

export default SafeAnchor;
