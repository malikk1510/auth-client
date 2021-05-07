import React from "react";
import PrimaryRoutes from "./routes/primary.routes";
import "./shared/style.css";
import Header from "./shared/Header/Header";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const adminSelector = useSelector((state) => state.adminReducer);
  return (
    <>
     
      {adminSelector.isLoggedIn && <Header />}
      <PrimaryRoutes /> 
    </>
  );
}

export default App;
