import { Button } from './Button.element';
import { Meta } from '@storybook/react';
import { PhoneIcon, BellIcon } from '@chakra-ui/icons';

export default {
  component: Button,
  title: 'Button',
} as Meta;

export const DefaultButtons = () => (
  <>
    <Button colorScheme="primary" mx="2">
      Primary
    </Button>
    <Button colorScheme="secondary" mx="2">
      Secondary
    </Button>
  </>
);

export const DisabledButton = () => (
  <>
    <Button colorScheme="primary" isDisabled mx="2">
      Disabled
    </Button>

    <Button colorScheme="secondary" isDisabled mx="2">
      Disabled
    </Button>
  </>
);

export const LoadingButton = () => (
  <>
    <Button colorScheme="primary" isLoading mx="2">
      Loading
    </Button>
    <Button colorScheme="secondary" isLoading mx="2">
      Loading
    </Button>
  </>
);

export const DifferentSizes = () => (
  <>
    <Button colorScheme="primary" size="sm" mx="2">
      Small
    </Button>
    <Button colorScheme="secondary" size="md" mx="2">
      Medium
    </Button>
    <Button colorScheme="red" size="lg" mx="2">
      Large
    </Button>
  </>
);

export const WithIcon = () => (
  <>
    <Button colorScheme="primary" leftIcon={<PhoneIcon />} mx="2">
      Left Icon
    </Button>
    <Button colorScheme="primary" rightIcon={<BellIcon />} mx="2">
      Right Icon
    </Button>
  </>
);
