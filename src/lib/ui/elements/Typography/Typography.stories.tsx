import { Heading } from '~/lib/ui/elements/Typography/Heading.tsx';
import { Flex } from '~/lib/ui/elements/Flex';


export default {
  title : 'Typography',
}


export const Headings= () => (
  <Flex gap={4} direction="column">
      <Heading as='h1' size='4xl' noOfLines={1}>
        (4xl) Heading
      </Heading>
      <Heading as='h2' size='3xl' noOfLines={1}>
        (3xl) Heading
      </Heading>
      <Heading as='h2' size='2xl'>
        (2xl) Heading
      </Heading>
      <Heading as='h2' size='xl'>
        (xl) Heading
      </Heading>
      <Heading as='h3' size='lg'>
        (lg) Heading
      </Heading>
      <Heading as='h4' size='md'>
        (md) Heading
      </Heading>
      <Heading as='h5' size='sm'>
        (sm) Heading
      </Heading>
      <Heading as='h6' size='xs'>
        (xs) Heading
      </Heading>
  </Flex>
)