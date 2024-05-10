import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react';
import { useTranslate } from '~/lib/translation/useTranslate';

type ButtonElementProps = {
  dontTranslate?: boolean;
} & ButtonProps;

/**
 * Button element
 * @param dontTranslate Boolean to control translation
 * @param children Button content
 * @param rest Other button properties
 * @returns JSX.Element
 */
export const Button = ({
  dontTranslate,
  children,
  ...rest
}: ButtonElementProps) => {
  const shouldTranslate = !dontTranslate && typeof children === 'string';
  const translate = useTranslate();

  return (
    <ChakraButton {...rest}>
      {shouldTranslate ? translate(children as string) : children}
    </ChakraButton>
  );
};
