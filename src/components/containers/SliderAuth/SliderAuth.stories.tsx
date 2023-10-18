import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react'

import SliderAuth from './SliderAuth';


const meta: Meta<typeof SliderAuth> = {
	title: 'containers/SliderAuth',
	component: SliderAuth,
	args: {
	},
	argTypes: {
	}
} satisfies Meta<typeof SliderAuth>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

