import useGenres from "./useGenres";
import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((g) => g.id === id);
};

export default usePlatform;
