import { Div } from '~/lib/ui/elements/Box/Box';
import { Heading } from '~/lib/ui/elements/Typography';
import { TodoList } from './TodList';

export default function Home() {
  return (
    <Div>
      <Heading> Todo List</Heading>

      <TodoList />
    </Div>
  );
}
