import { ChakraProvider as BaseChakaraProvider } from '@chakra-ui/react';
import { customTheme } from '~/lib/ui/theme';
import { globalStyles } from '../../theme/global-styles';

type ChakraProps = {
  children: React.ReactNode;
};

export const ChakaraProvider = ({ children }: ChakraProps) => {
  return (
    <BaseChakaraProvider
      theme={{
        ...customTheme,
        styles: {
          global: {
            ...globalStyles,
          },
        },
      }}
    >
      {children}
    </BaseChakaraProvider>
  );
};
