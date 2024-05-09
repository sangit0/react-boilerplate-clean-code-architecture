import {
  Flex as ChakraFlex,
  FlexProps as ChakraFlexProps,
} from '@chakra-ui/react';

/**
 * Display flex element
 * @param children Flex content
 * @param rest Other flex properties
 * @returns JSX.Element
 */
export const Flex = ({ children, ...rest }: ChakraFlexProps) => {
  return <ChakraFlex {...rest}>{children}</ChakraFlex>;
};

/**
 * Display flex element with row direction
 * @param children Flex content
 * @param rest Other flex properties
 * @returns JSX.Element
 */
export const Row = ({ children, ...rest }: ChakraFlexProps) => {
  return (
    <ChakraFlex direction="row" {...rest}>
      {children}
    </ChakraFlex>
  );
};

/**
 * Display flex element with column direction
 * @param children Flex content
 * @param rest Other flex properties
 * @returns JSX.Element
 */
export const Column = ({ children, ...rest }: ChakraFlexProps) => {
  return (
    <ChakraFlex direction="column" {...rest}>
      {children}
    </ChakraFlex>
  );
};
