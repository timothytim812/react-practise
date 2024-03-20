import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

export const Practice3 = () => {
  const [catFact, setCatFact] = useState("");

  const FecthCat = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    FecthCat();
  }, []);

  return (
    <>
      <div
        className="m-5 bg-orange-600 text-slate-200 p-10 
      rounded shadow-2xl text-xl text-center"
      >
        <p>Generate Cat Fact</p>
        <button
          className=" text-zinc-600 hover:text-gray-700 mt-5"
          onClick={FecthCat}
        >
          Click me !
        </button>
        <p className="mt-5">" {catFact} "</p>
      </div>
    </>
  );
};

export const Practice4 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  const FetchAge = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setAge(res.data);
    });
  };

  return (
    <>
      <div
        className="m-5 bg-blue-500 text-neutral-800 p-10 
      rounded shadow-2xl text-base text-center"
      >
        <input
          className="ml-5 border-2 rounded-lg p-2"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          className="ml-5 border-2 p-2 rounded-lg hover:bg-blue-600"
          onClick={FetchAge}
        >
          Predict
        </button>
        <p className="mt-5">Predicted Name: {age?.name}</p>
        <p className="mt-5">Predicted Age: {age?.age}</p>
        
      </div>
    </>
  );
};