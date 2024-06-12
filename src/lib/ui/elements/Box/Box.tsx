import { Box as ChakraBox, BoxProps as ChakraBoxProps } from '@chakra-ui/react';

export const Box = ({ children, ...rest }: ChakraBoxProps) => {
  return <ChakraBox {...rest}>{children}</ChakraBox>;
};

export const Div = Box;
