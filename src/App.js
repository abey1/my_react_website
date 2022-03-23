import React, { useEffect, useReducer } from "react";
import Desktop from "./components/desktop";
import Tablet from "./components/tablet.js";
import Mobile from "./components/mobile.js";

const reducer = (state, action) => {
  switch (action.type) {
    case "dataLoaded":
      return { ...state, loading: false, data: action.payload };
    case "toggleMenu":
      return { ...state, menuOpened: action.payload.menuOpened };
    case "updateName":
      return { ...state, name: action.payload };
    case "updateEmail":
      return { ...state, email: action.payload };
    case "updateMessage":
      return { ...state, message: action.payload };
    case "makeVoid":
      return { ...state, name: "", email: "", message: "" };
    case "toggleSend":
      return { ...state, sending: action.payload };
    case "updateSendButtonText":
      return { ...state, sendButtonText: action.payload };
  }
};

export const AppContext = React.createContext();

function App() {
  const toggleMenu = (menuState) => {
    dispatch({
      type: "toggleMenu",
      payload: { menuOpened: !menuState },
    });
  };

  const updateName = (e) => {
    e.preventDefault();
    dispatch({ type: "updateName", payload: e.target.value });
  };

  const updateEmail = (e) => {
    e.preventDefault();
    dispatch({ type: "updateEmail", payload: e.target.value });
  };

  const updateMessage = (e) => {
    e.preventDefault();
    dispatch({ type: "updateMessage", payload: e.target.value });
  };

  const makeVoid = () => {
    dispatch({ type: "makeVoid" });
  };

  const toggleSend = (sending) => {
    dispatch({ type: "toggleSend", payload: sending });
  };

  const updateSendButtonText = (buttonText) => {
    dispatch({ type: "updateSendButtonText", payload: buttonText });
  };

  const initialState = {
    data: [],
    loading: true,
    menuOpened: false,
    toggleMenu: toggleMenu,
    name: "",
    email: "",
    message: "",
    updateName: updateName,
    updateEmail: updateEmail,
    updateMessage: updateMessage,
    makeVoid: makeVoid,
    sending: false,
    sendButtonText: "Send",
    toggleSend: toggleSend,
    updateSendButtonText: updateSendButtonText,
  };

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
