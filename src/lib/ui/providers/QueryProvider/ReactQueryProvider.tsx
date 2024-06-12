import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
  return (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );
}
