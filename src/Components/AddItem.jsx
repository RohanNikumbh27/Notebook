import React from "react";
import "../Styles/AddItem.css";

const displaynone = () => {
  const outerDiv = document.getElementsByClassName("outerdiv-forback")[0];
  if (outerDiv) {
    outerDiv.style.display = "none";
  }
};

const AddItem = () => {
  return (
    <div className="outerdiv-forback" onClick={displaynone}>
      <div className="inner-add-div">
        <h1 className="h1-add-new-note">Add New Note</h1>
        <input
          className="title-input"
          name="title"
          placeholder="Give Title"
        ></input>
        <input
          className="description-input"
          name="desc"
          placeholder="Give Description"
        ></input>
        <button className="add-note-button">Add Note</button>
      </div>
    </div>
  );
};

export default AddItem;
