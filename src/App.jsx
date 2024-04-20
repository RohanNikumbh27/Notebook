import React from "react";
import TodoComp from "./TodoComp";
import Header from "./Header";
import AddItem from "./Components/AddItem";

const App = () => {
  return (
    <>
      <Header />
      <TodoComp />
      {/* <AddItem /> */}
    </>
  );
};

export default App;
