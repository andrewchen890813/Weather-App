import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "./use-local-storage";

interface useSearchHistoryItem {
  id: string;
  query: string;
  lat: number;
  lon: number;
  name: string;
  country: string;
  state?: string;
  searchedAt: number;
}

export function useSearchHistory() {
  const [history, setHistory] = useLocalStorage<useSearchHistoryItem[]>(
    "search-history",
    []
  );

  const historyQuery = useQuery({
    queryKey: ["search-history"],
    queryFn: () => history,
    initialData: history,
  });
  const queryClient = useQueryClient();

  const addToHistory = useMutation({
    mutationFn: async (
      search: Omit<useSearchHistoryItem, "id" | "SearchedAt">
    ) => {
      const newSearch: useSearchHistoryItem = {
        ...search,
        id: `${search.lat}-${search.lon}-${Date.now()}`,
        searchedAt: Date.now(),
      };

      const filteredHistory = history.filter(
        (item) => !(item.lat === search.lat && item.lon === search.lon)
      );

      const newHistory = [newSearch, ...filteredHistory].slice(0, 10);

      setHistory(newHistory);
      return newHistory;
    },
    onSuccess: () => {
      queryClient.setQueryData(["search-history"], []);
    },
  });

  const clearHistory = useMutation({
    mutationFn: async () => {
      setHistory([]);
      return [];
    },
  });
  return {
    history: historyQuery.data ?? [],
    addToHistory,
    clearHistory,
  };
}
