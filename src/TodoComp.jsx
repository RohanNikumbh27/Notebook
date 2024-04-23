import React, { useState, useRef } from "react";
import "../src/index.css";
import { nanoid } from "nanoid";

const TodoComp = () => {
  const [arr, setArr] = useState([
    {
      id: nanoid(),
      item: "Firstitem",
      description: "This is the description of the first note",
    },
    {
      id: nanoid(),
      item: "Seconditem",
      description: "This is description",
    },
    {
      id: nanoid(),
      item: "Fourthitem",
      description: "This is description",
    },
    {
      id: nanoid(),
      item: "Fifthitem",
      description: "This is description",
    },
    {
      id: nanoid(),
      item: "Thirditem",
      description:
        "This is the description of the third note and the UI is really minimalistic",
    },
  ]);

  function deleteItem(id) {
    const updatedArr = arr.filter((item) => item.id !== id);
    setArr(updatedArr);
  }

  const [newItem, setNewItem] = useState({});

  const descriptionInputRef = useRef(null);

  function addNewItem(event) {
    if (event.key === "Enter") {
      if (event.target.name === "item") {
        // Move focus to description input
        descriptionInputRef.current.focus();
      } else if (
        event.target.name === "description" &&
        newItem.description.trim() !== ""
      ) {
        // Add a new item when description is not empty
        setArr([{ id: nanoid(), ...newItem }, ...arr]);
        setNewItem({
          id: "",
          item: "",
          description: "",
        });
        // Move focus back to item input
        event.target.blur(); // Blur the description input to avoid "Enter" being triggered again
      }
    }
  }

  function handleAddButtonClick() {
    // Check if both item and description fields are empty
    if (newItem.item === "" && newItem.description === "") {
      alert("Input fields must contain some text");
      return;
    }

    // Check if description field is empty
    if (newItem.description === "") {
      alert("Description field should not be empty");
      return;
    }

    // Add a new item
    setArr([{ id: nanoid(), ...newItem }, ...arr]);
    setNewItem({
      id: "",
      item: "",
      description: "",
    });

    // Move focus back to item input
    descriptionInputRef.current.blur();
  }

  return (
    <>
      <div>
        <div className="input-div">
          <input
            value={newItem.item}
            name="item"
            onChange={(e) => setNewItem({ ...newItem, item: e.target.value })}
            onKeyDown={addNewItem}
          />
          <input
            ref={descriptionInputRef}
            value={newItem.description}
            name="description"
            onChange={(e) =>
              setNewItem({ ...newItem, description: e.target.value })
            }
            onKeyDown={addNewItem}
          />
          <button className="addbutton" onClick={handleAddButtonClick}>
            Add
          </button>
        </div>
        {arr.map((i) => (
          <li key={i.id}>
            {i.item}
            <button className="deletebutton" onClick={() => deleteItem(i.id)}>
              Delete
            </button>
            <p>{i.description}</p>
            <div className="edit">✒️</div>
          </li>
        ))}
      </div>
    </>
  );
};

export default TodoComp;
