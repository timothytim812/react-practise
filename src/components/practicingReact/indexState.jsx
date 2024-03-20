import { useState } from "react";

export const Practice1 = () => {
  const [fun, setFun] = useState();
  const [msg, setMsg] = useState(true);

  const handleFun = (e) => {
    setFun(e.target.value);
    setMsg(false);

    if (e.target.value === "") {
      setMsg(true);
    }
  };

  return (
    <>
      <div
        className="mt-5 mx-5 mb-0 bg-stone-800 text-slate-300 p-6 
      rounded shadow-2xl text-base h-26"
      >
        <h1 className=" text-pink-300 text-base">React Input Example</h1>
        <input
          className="mt-5 h-6 placeholder-slate-500 px-2 py-2"
          type="text"
          value={fun}
          onChange={handleFun}
          placeholder="Enter value"
        />

        <p className="mt-5">
          {msg && "Value displays here"}
          {fun}
        </p>
      </div>
    </>
  );
};

export const Practice2 = () => {
  const [fun, setFun] = useState(0);

  const handleaddFun = () => {
    setFun(fun + 1);
  };

  const handlereduceFun = () => {
    setFun(fun - 1);
  };

  const handleresetFun = () => {
    setFun(0);
  };

  return (
    <>
      <div
        className="m-5 bg-gray-700 text-slate-300 p-10 
      rounded shadow-2xl text-sm text-center"
      >
        <button
          className=" ml-5 border-2 py-2 px-4 rounded-3xl bg-gray-300 hover:bg-gray-400 text-black font-medium"
          onClick={handleaddFun}
        >
          Add Me
        </button>
        <button
          className=" ml-5 border-2 py-2 px-4 rounded-3xl bg-gray-300 hover:bg-gray-400 text-black font-medium"
          onClick={handlereduceFun}
        >
          Subtract Me
        </button>
        <button
          className=" ml-5 border-2 py-2 px-4 rounded-3xl bg-gray-300 hover:bg-gray-400 text-black font-medium"
          onClick={handleresetFun}
        >
          Reset Me
        </button>
        <h1
          className="text-center text-lg mt-5 mx-auto w-20
       p-2 border rounded-2xl"
        >
          {fun}
        </h1>
      </div>
    </>
  );
};
