import React, { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputValue !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, ind) => ind !== index);
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };
  return (
    <>
      <div className="main-div container d-flex justify-content-center align-items-center vh-100 bg-black">
        <div className="child ">
          <figure className="text-center">
            <img
              src="https://i.imgur.com/OvMZBs9.jpeg"
              alt="todo"
              width={"100px"}
              height={"100px"}
            />
            <figcaption className="text-center text-light">
              Add your List Here
            </figcaption>
          </figure>
          <div className="add-item">
            <input
              className=""
              type="text"
              placeholder="type here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <i className="fa fa-plus text-light" onClick={addItem}></i>
          </div>

          <div className="show-item">
            {items.map((elem, ind) => (
              <div
                className="d-flex align-items-center justify-content-between each-item"
                key={ind}
              >
                <h3 className="m-0 text-primary">{elem}</h3>
                <i
                  className="fa fa-trash-alt text-light"
                  title="Delete Item"
                  onClick={() => deleteItem(ind)}
                ></i>
              </div>
            ))}

            <div className="check-list p-5 d-flex justify-content-center align-items-center">
              <button className="btn btn-danger" onClick={removeAll}>
                REMOVE ALL
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
