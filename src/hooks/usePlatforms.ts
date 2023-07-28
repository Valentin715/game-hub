import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./useGames";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => {
          console.log(res.data);
          return res.data;
        }),
    staleTime: 24 * 60 * 60 * 1000, // 25h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
