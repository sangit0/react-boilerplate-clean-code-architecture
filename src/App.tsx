import {
  QueryProvider,
  useGetQueryClient,
} from '~/lib/ui/providers/QueryProvider';
import { AppRoutes } from './routes';
import { ThemeProvider } from '~/lib/ui/providers/ThemeProvider';
import { Translation } from '~/lib/translation/Translation';

const translation = new Translation();

const App = () => {
  // get query client
  const queryClient = useGetQueryClient();

  // initialize translation
  translation.init();

  return (
    <ThemeProvider>
      <QueryProvider client={queryClient}>
        <AppRoutes />
      </QueryProvider>
    </ThemeProvider>
  );
};

export default App;
