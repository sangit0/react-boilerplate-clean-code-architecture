import {
  Text as ChakraText,
  TextProps as TextChakaraProps,
} from '@chakra-ui/react';
import { useTranslate } from '~/lib/translation';

type TextProps = {
  dontTranslate?: boolean;
} & TextChakaraProps;

/**
 * Display text element
 * @param children Text content
 * @param rest Other text properties
 * @returns JSX.Element
 */

export const Text = ({ children, dontTranslate, ...rest }: TextProps) => {
  const shouldTranslate = !dontTranslate && typeof children === 'string';

  const translate = useTranslate();

  if (shouldTranslate) {
    children = translate(children as string);
  }

  return <ChakraText {...rest}>{children}</ChakraText>;
};
