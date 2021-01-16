import React from 'react';

const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  console.log(e);
};

const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
  console.log(event);
};

interface Props {}

export const EventComponent: React.FC<Props> = props => {
  return (
    <div>
      <input type="text" onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};
