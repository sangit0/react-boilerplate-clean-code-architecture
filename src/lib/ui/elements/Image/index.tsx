import {
  Image as ChakraImage,
  ImageProps as ChakraImageProps,
} from '@chakra-ui/react';

export const Image = ({ src, alt, ...rest }: ChakraImageProps) => {
  return <ChakraImage src={src} alt={alt} {...rest} />;
};
