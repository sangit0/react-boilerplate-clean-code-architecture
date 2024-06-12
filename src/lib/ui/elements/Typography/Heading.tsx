import {
  Heading as ChakraHeading,
  HeadingProps as HeadingChakraProps,
} from '@chakra-ui/react';
import { useTranslate } from '~/lib/translation';

type HeadingProps = { dontTranslate?: boolean } & HeadingChakraProps;

/**
 * Display heading element
 * @param children Heading content
 * @param dontTranslate
 * @param rest Other heading properties
 * @returns JSX.Element
 */

export const Heading = ({ children, dontTranslate, ...rest }: HeadingProps) => {
  const shouldTranslate = !dontTranslate && typeof children === 'string';

  const translate = useTranslate();

  if (shouldTranslate) {
    children = translate(children as string);
  }

  return <ChakraHeading {...rest}>{children}</ChakraHeading>;
};
