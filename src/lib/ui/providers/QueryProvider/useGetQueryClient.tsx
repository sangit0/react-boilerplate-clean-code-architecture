import { QueryClient } from '@tanstack/react-query';

/**
 * The useGetQueryClient hook is used to create a new QueryClient instance.
 * You can customize the default options for the QueryClient instance,
 * such as the gcTime, refetchOnWindowFocus, and retry.
 * @returns {QueryClient}
 */
export function useGetQueryClient() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 5 * 60 * 1000, // MINUTE * SECOND * MILLISECOND
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  });

  return queryClient;
}
