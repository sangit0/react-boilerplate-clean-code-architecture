import {
  QueryProvider,
  useGetQueryClient,
} from '~/lib/ui/providers/QueryProvider';
import { AppRoutes } from './routes';
import { ThemeProvider } from '~/lib/ui/providers/ThemeProvider';
import { Translation } from '~/lib/translation/Translation';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  /** initialize translation */
  const translation = new Translation();
  translation.init();

  /** get query client */
  const queryClient = useGetQueryClient();

  return (
    <BrowserRouter>
      <ThemeProvider>
        <QueryProvider client={queryClient}>
          <AppRoutes />
        </QueryProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
