import React from 'react';
import { styled, CSS, VariantProps } from '../stitches.config';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { Separator } from './Separator';

import type * as Polymorphic from '@radix-ui/react-polymorphic';

export const Tabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
  },
});

export const TabsTab = styled(TabsPrimitive.Tab, {
  flexShrink: 0,
  height: '$5',
  display: 'inline-flex',
  lineHeight: 1,
  fontSize: '$1',
  px: '$2',
  userSelect: 'none',
  outline: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$slate11',
  border: '1px solid transparent',
  borderTopLeftRadius: '$2',
  borderTopRightRadius: '$2',
  zIndex: '10',
  '@hover': {
    '&:hover': {
      color: '$hiContrast',
    },
  },

  '&[data-state="active"]': {
    color: '$hiContrast',
    borderColor: '$slate6',
    borderBottomColor: 'transparent',
  },

  '&[data-orientation="vertical"]': {
    justifyContent: 'flex-start',
    borderTopRightRadius: 0,
    borderBottomLeftRadius: '$2',
    borderBottomColor: 'transparent',

    '&[data-state="active"]': {
      borderBottomColor: '$slate6',
      borderRightColor: 'transparent',
    },
  },
});

type TabsListCSSProp = { css?: CSS };
type TabsListVariants = VariantProps<typeof StyledTabsList>;
type TabsListOwnProps = Polymorphic.OwnProps<typeof TabsPrimitive.List> &
  TabsListCSSProp &
  TabsListVariants;

const StyledTabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8',
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    boxShadow: 'inset -1px 0 0 $slate6',
  },
});

type TabsListComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof TabsPrimitive.List>,
  TabsListOwnProps
>;

export const TabsList = React.forwardRef((props, forwardedRef) => (
  <>
    <StyledTabsList {...props} ref={forwardedRef} />
    <Separator />
  </>
)) as TabsListComponent;

export const TabsPanel = styled(TabsPrimitive.Panel, {
  flexGrow: 1,
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8',
  },
});
