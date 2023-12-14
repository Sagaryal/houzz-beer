import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Beer from "./Beer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /**
       * Below options depends on specific useCase
       * on how quickly the data is stale
       * For now setting it to false so that no refetching occurs
       * on app tab change (i.e mount) and browser tab change though it's
       * a very useful feature.
       */
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Beer />
    </QueryClientProvider>
  );
}
