import { useContext } from "react";
import { AppContext } from "../../App";
import { useState } from "react";
import { createContext } from "react";

export const Practice5 = () => {
  const { username } = useContext(AppContext);
  const {newUsername} = useContext(nameContext);

  return (
    <>
      <div
        className="m-5 bg-red-500 text-slate-200 p-10 
      rounded shadow-2xl text-3xl text-center"
      >
       {username === newUsername ? <h1>Welcome {username} ! </h1> : <h1>Please Enter your name</h1>} 
      </div>
    </>
  );
};

export const nameContext = createContext();

export const Practice6 = () => {
  const {setUsername } = useContext(AppContext);

  const [newUsername, setNewUsername] = useState('');

  const [msg, setMsg] = useState(false);

  const updateUsername = () => {
    setUsername(newUsername);
    setMsg(true);

    setInterval(() => {
      setMsg(false)
    }, 1000);
  }


  return (
    <>
    <nameContext.Provider value={{newUsername,setNewUsername}}>
      <div
        className="m-5 bg-teal-500 text-slate-200 p-10 
      rounded shadow-2xl text-xl text-center"
      >
        <label htmlFor="#name-input" className="text-2xl">Name :</label>
        <input id="name-input" className="ml-2 border-2 rounded-lg p-2 text-slate-600"
          type="text"
          value={newUsername}
          onChange={(e) => {
            setNewUsername(e.target.value);
            if(e.target.value !== newUsername){
              setMsg(false)
            }
          }}
          onKeyDown={(e) => {
            if(e.key ==='Enter'){
              updateUsername();
            }
          }}  
        />
        <button className="ml-5 border-2 p-2 rounded-lg hover:bg-teal-600"
          onClick={updateUsername}
        >
          Update User
        </button>
        {msg && <p className="mt-5">"Profile name updated"</p>}
      </div>
      <div>
        <Practice5/>
      </div>
      </nameContext.Provider>
    </>
  );
};
