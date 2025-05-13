import { Coordinates } from "@/api/types";
import { useQuery } from "@tanstack/react-query";

export function useWeatherQuery(coordinates: Coordinates | null) {
  useQuery({
    queryKey: ["weather"],
  });
}
