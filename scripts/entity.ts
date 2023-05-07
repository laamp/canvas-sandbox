interface EntityArgs {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface EntityType {
  render: (canvasCtx: CanvasRenderingContext2D) => void;
}

const Entity = ({ x, y, w, h }: EntityArgs): EntityType => {
  const render = (canvasCtx: CanvasRenderingContext2D): void => {
    canvasCtx.fillStyle = 'white';
    canvasCtx.fillRect(x, y, w, h);
  };

  return { render };
};

export default Entity;
