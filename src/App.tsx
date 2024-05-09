import {
  QueryProvider,
  useGetQueryClient,
} from '~/lib/ui/providers/QueryProvider';
import { AppRoutes } from './routes';
import { ThemeProvider } from '~/lib/ui/providers/ThemeProvider';

const App = () => {
  const queryClient = useGetQueryClient();

  return (
    <ThemeProvider>
      <QueryProvider client={queryClient}>
        <AppRoutes />
      </QueryProvider>
    </ThemeProvider>
  );
};

export default App;
