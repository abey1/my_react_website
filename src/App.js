import React, { useEffect, useReducer } from "react";
import Desktop from "./components/desktop";
import Tablet from "./components/tablet.js";
import Mobile from "./components/mobile.js";

const reducer = (state, action) => {
  if (action.type === "dataLoaded") {
    const newState = { ...state, loading: false, data: action.payload };
    return newState;
  }
};

export const AppContext = React.createContext();

function App() {
  const initialState = { data: [], loading: true };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const downloadData = async () => {
      const d = await fetch(
        "https://abeybruck.com/phpfiles/get_all_projects.php"
      ).then((res) => res.json());
      dispatch({ type: "dataLoaded", payload: d });
    };
    downloadData();
  }, []);

  return (
    <AppContext.Provider value={state}>
      <input type="hidden" id="anPageName" name="page" value="desktop" />
      <Desktop />
      <Tablet />
      <Mobile />
    </AppContext.Provider>
  );
}

export default App;
