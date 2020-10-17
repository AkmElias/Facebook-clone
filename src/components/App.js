import React from "react";

import "./App.css";
import Header from "./home/Header";
import Sidebar from "./sidebar&widgets/Sidebar";
import Feed from "./home/Feed";
import Widgets from "./sidebar&widgets/Widgets";
import Login from "./auth/Login";
import { useStateValue } from "../globalState/StateProvider";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
