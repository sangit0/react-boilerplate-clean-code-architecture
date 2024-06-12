import { Avatar } from '@chakra-ui/react';
import { Div } from '../elements/Box/Box';
import { Flex } from '../elements/Flex';
import { Image } from '../elements/Image';
import { Text } from '../elements/Typography';

export const Header = () => {
  return (
    <header>
      <Div bg="gray.800" color="white" p={4}>
        <Flex align="center" justify="space-between">
          <Flex align="center" gap="1rem">
            <Image
              width="2rem"
              src="https://www.cdnlogo.com/logos/c/41/create-react-app.svg"
              alt="logo"
            />
            <Text>React BoilerPlate</Text>
          </Flex>

          <Flex>
            <Avatar name="R" />
          </Flex>
        </Flex>
      </Div>
    </header>
  );
};
