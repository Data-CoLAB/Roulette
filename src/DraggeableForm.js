import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BiTrash, BiGridVertical, BiPlus } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import Roulette from "./Roulette";

const FormularioTexto = ({ onFinish }) => {
  const [inputList, setInputList] = useState([
    {
      id: uuidv4(),
      type: "spin_again",
      text: "Spin Again"
    },
    {
      id: uuidv4(),
      type: "curiosity",
      text: "Curiosity"
    },
    {
      id: uuidv4(),
      type: "you_win",
      text: "You Win!!"
    },
    {
      id: uuidv4(),
      type: "challenge",
      text: "Challenge"
    },
    {
      id: uuidv4(),
      type: "spin_again",
      text: "Spin Again"
    },
    {
      id: uuidv4(),
      type: "curiosity",
      text: "Curiosity"
    },
    {
      id: uuidv4(),
      type: "you_win",
      text: "You Win!!"
    },
    {
      id: uuidv4(),
      type: "challenge",
      text: "Challenge"
    }
  ]);
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { text: "", id: uuidv4() }]);
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(inputList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setInputList(items);
  }

  return (
    <div className="main-form">
      {/*  */}
      <Roulette data={inputList} onFinish={(e) => onFinish(e)} />
    </div>
  );
};

export default FormularioTexto;
