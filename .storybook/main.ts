import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  stories: ['../src/lib/ui/**/*.stories.@(ts|tsx)'],
  addons: [
    '@chakra-ui/storybook-addon',
    '@storybook/addon-styling',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  docs: {
    autodocs: 'tag',
  },
};

export default config;
