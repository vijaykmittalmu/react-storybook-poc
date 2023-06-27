import type { Meta, StoryObj } from '@storybook/react';

import { VIcon } from './VIcon';

const meta: Meta<typeof VIcon> = {
    title: 'Component/Icon',
    component: VIcon,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
    }
}
  
  
export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultIcon: Story = {
    args: {
        iconName: 'Cancel',
        size: 30,
    }
}