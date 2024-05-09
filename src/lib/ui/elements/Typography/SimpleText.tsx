import { Box, BoxProps } from '@chakra-ui/react';
import { useTranslate } from '~/lib/translation';

/**
 * Display span element
 * @param children Span content
 * @param boxProps @BoxProps span properties
 * @returns JSX.Element
 */
export const SimpleText = (props: BoxProps) => {
  const { children, ...propsBox } = props;
  const translate = useTranslate();

  return (
    <Box whiteSpace="pre-line" as="span" {...propsBox}>
      {translate(children as string)}
    </Box>
  );
};
