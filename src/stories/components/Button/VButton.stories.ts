import type { Meta, StoryObj } from '@storybook/react';

import { VButton } from './VButton';

const meta: Meta<typeof VButton> = {
    title: 'Component/Buttons',
    component: VButton,
  tags: ['autodocs'],
  argTypes: {
    color: { control: { type: 'select' } },
    iconColor: { control: 'color' },
  }
}
  
  
export default meta;
type Story = StoryObj<typeof meta>;

export const TextButton: Story = {
    args: {
        variant: 'text',
        label: 'Button'
    }
}

export const DefaultButton: Story = {
    args: {
        variant: 'contained',
        label: 'Button',
        color: 'secondary'
    }
}

export const OutlineButton: Story = {
  args: {
      variant: 'outlined',
      label: 'Button'
  }
}

export const ButtonWithIconAndLabel: Story = {
  args: {
      variant: 'contained',
      label: 'Button',
      iconName: 'Cancel',
      iconDirection: false  
  }
}

export const IconButton: Story = {
  args: {
    variant: 'contained',
    iconButton: true,
    iconName: 'Cancel',
    label: 'Button',
  }
}
