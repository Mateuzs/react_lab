import React, { FunctionComponent } from "react";
import Draggable from "react-draggable";

import "./DragContainer.scss";

const DragContainer: FunctionComponent = () => (
  <div className="drag-container">
    <Draggable bounds="parent">
      <div className="drag-component__turquoise">Drag me please!</div>
    </Draggable>
    <Draggable bounds="parent">
      <div className="drag-component__orange">Drag me please!</div>
    </Draggable>
    <Draggable bounds="parent">
      <div className="drag-component__magenta">Drag me please!</div>
    </Draggable>
  </div>
);

export default DragContainer;
