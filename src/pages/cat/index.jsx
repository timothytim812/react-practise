import Practice7 from "../../components/practicingReact/indexQuery.jsx";

const Cat = () => {
  return (
    <>
      <div>
        <Practice7 />
      </div>
    </>
  );
};

export default Cat;

// const {data:moviesData, isLoading} = useQuery({
//   queryKey:['title'],
//   queryFn:(title) => {
//     axios.get(`https://www.omdbapi.com/?t=${title}&apikey=cd1c346`).then((res)=>res.data);

//       console.log(data.Search);
//   }
// });