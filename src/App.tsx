import {
  QueryProvider,
  useGetQueryClient,
} from './lib/ui/providers/QueryProvider';
import { AppRoutes } from './routes';

const App = () => {
  const queryClient = useGetQueryClient();

  return (
    <QueryProvider client={queryClient}>
      <AppRoutes />
    </QueryProvider>
  );
};

export default App;
