import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonVariant } from './Button';
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
    variant: ButtonVariant.Primary,
    size: ButtonSize.ExtraSmall,
    label: 'Primary Extra Small',
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: ButtonVariant.Primary,
    size: ButtonSize.Small,
    label: 'Primary Small',
  },
};

export const PrimaryMedium: Story = {
  args: {
    variant: ButtonVariant.Primary,
    size: ButtonSize.Medium,
    label: 'Primary Medium',
  },
};

export const PrimaryLarge: Story = {
  args: {
    variant: ButtonVariant.Primary,
    size: ButtonSize.Large,
    label: 'Primary Large',
  },
};

export const PrimaryExtraLarge: Story = {
  args: {
    variant: ButtonVariant.Primary,
    size: ButtonSize.ExtraLarge,
    label: 'Primary Extra Large',
  },
};

export const SecondaryExtraSmall: Story = {
  args: {
    variant: ButtonVariant.Secondary,
    size: ButtonSize.ExtraSmall,
    label: 'Secondary Extra Small',
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: ButtonVariant.Secondary,
    size: ButtonSize.Small,
    label: 'Secondary Small',
  },
};

export const SecondaryMedium: Story = {
  args: {
    variant: ButtonVariant.Secondary,
    size: ButtonSize.Medium,
    label: 'Secondary Medium',
  },
};

export const SecondaryLarge: Story = {
  args: {
    variant: ButtonVariant.Secondary,
    size: ButtonSize.Large,
    label: 'Secondary Large',
  },
};

export const SecondaryExtraLarge: Story = {
  args: {
    variant: ButtonVariant.Secondary,
    size: ButtonSize.ExtraLarge,
    label: 'Secondary Extra Large',
  },
};
