import type { Preview, StoryObj } from "@storybook/react";
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { store } from "../src/redux/store";
import '../src/styles/index.scss';

const preview: Preview = {
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
