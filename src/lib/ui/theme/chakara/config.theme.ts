import type { ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { components } from './components';
import { fonts } from './fonts';

/**
 * Chakra UI Theme Configuration
 * @type {ThemeConfig}
 */
export const config: ThemeConfig = {
  initialColorMode: 'light',
  disableTransitionOnChange: false,
};

/**
 * Chakra UI Custom Theme
 * @type {ThemeConfig}
 */
const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components,
});

export default customTheme;
