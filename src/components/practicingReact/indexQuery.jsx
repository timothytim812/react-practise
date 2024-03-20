import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Practice7 = () => {
  const {
    data: CatData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  if (isLoading) {
    return <p className="m-5 bg-gray-500 text-slate-200 p-10 
    rounded shadow-2xl text-xl text-center">Loading</p>;
  }

  return (
    <>
      <div
        className="m-5 bg-gray-500 text-slate-200 p-10 
      rounded shadow-2xl text-xl text-center"
      >
        <h1>Fetching using React Query - <span className=" text-stone-900 font-semibold">Cat Fact</span></h1>
        <p className="mt-5 border-[1px] rounded-3xl p-10">" {CatData && CatData.fact} "</p>
        <button
          className="mt-5 border-[1px] p-[10px] rounded-lg hover:bg-gray-800 text-base"
          onClick={refetch}
        >
          Update Fact
        </button>
      </div>
    </>
  );
};

export default Practice7;
