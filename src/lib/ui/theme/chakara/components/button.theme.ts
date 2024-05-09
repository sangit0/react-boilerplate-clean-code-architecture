import type { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'lg',
    shadow: 'sm',
    minH: '2.125rem',
    fontSize: '0.875rem',
    fontWeight: 'normal',
    px: { base: '1rem', lg: '1rem' },
    py: { base: '0.5rem', lg: '0.75rem' },
    minW: { base: '6rem', lg: '8rem' },
  },
};
