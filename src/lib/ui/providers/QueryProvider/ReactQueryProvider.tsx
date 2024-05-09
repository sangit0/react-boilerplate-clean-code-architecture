import { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

/**
 * React Query Provider
 * @param props
 * @returns JSX.Element
 */
export function ReactQueryProvider(props: {
  children: ReactNode;
  client: QueryClient;
}) {
  const { children, client } = props;
  const queryClient = client;

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
