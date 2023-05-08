import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useMoviesList = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/movies", fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useMoviesList;
