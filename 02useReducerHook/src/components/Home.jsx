import { useReducer } from "react";
//reducer define
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.playload };
    case "UPDATE_AGE":
      return { ...state, age: action.playload };
    case "RESET":
      return { name: "", age: 0 };
    default:
      return state;
  }
};

const Home = () => {
  const initialState = { name: "", age: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold">How to useReducer Hooks Work</h1>
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center">
          <p>Name : {state.name}</p>
          <p>Age : {state.age}</p>
          <input
            type="text"
            placeholder="Enter Name"
            value={state.name}
            className="w-full mt-5 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            onChange={(e) =>
              dispatch({ type: "UPDATE_NAME", playload: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter Age"
            value={state.age}
            className="w-full mt-5 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            onChange={(e) =>
              dispatch({ type: "UPDATE_AGE", playload: Number(e.target.value) })
            }
          />
        </p>
        <button className="text-white mt-5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>dispatch({type:"RESET"})}>Reset Profile</button>
      </div>
    </div>
  );
};

export default Home;
