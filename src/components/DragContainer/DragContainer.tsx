import React, { FunctionComponent } from "react";
import Draggable from "react-draggable";

import "./DragContainer.scss";

const DragContainer: FunctionComponent = () => (
  <div className="drag-container">
    <Draggable bounds="parent">
      <div className="drag-component__blue">Drag me please!</div>
    </Draggable>
    <Draggable bounds="parent">
      <div className="drag-component__red">Drag me please!</div>
    </Draggable>
    <Draggable bounds="parent">
      <div className="drag-component__green">Drag me please!</div>
    </Draggable>
  </div>
);

export default DragContainer;
