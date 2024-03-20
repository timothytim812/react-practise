import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Movies = () => {
  const {
    data: MoviesData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: () => {
      axios
        .get("https://www.omdbapi.com/?apikey=cd1c346")
        .then((res) => res.data);
    },
  });

  return (
    <>
      <div className="m-5 bg-gray-500 text-slate-200 p-10 
      rounded shadow-2xl text-xl text-center">
        <p> {MoviesData && MoviesData?.Title} </p>
      </div>
    </>
  );
};

export default Movies;
