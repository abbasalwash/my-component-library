import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { fn } from '@storybook/test';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryExtraSmall: Story = {
  args: {
    variant: 'primary',
    size: 'xs',
    label: 'Primary Extra Small',
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    label: 'Primary Small',
  },
};

export const PrimaryMedium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Primary Medium',
  },
};

export const PrimaryLarge: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    label: 'Primary Large',
  },
};

export const PrimaryExtraLarge: Story = {
  args: {
    variant: 'primary',
    size: 'xl',
    label: 'Primary Extra Large',
  },
};

export const SecondaryExtraSmall: Story = {
  args: {
    variant: 'secondary',
    size: 'xs',
    label: 'Secondary Extra Small',
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: 'secondary',
    size: 'sm',
    label: 'Secondary Small',
  },
};

export const SecondaryMedium: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Secondary Medium',
  },
};

export const SecondaryLarge: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    label: 'Secondary Large',
  },
};

export const SecondaryExtraLarge: Story = {
  args: {
    variant: 'secondary',
    size: 'xl',
    label: 'Secondary Extra Large',
  },
};
