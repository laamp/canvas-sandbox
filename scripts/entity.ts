interface EntityArgs {
  x: number;
  y: number;
  w: number;
  h: number;
}

const Entity = ({ x, y, w, h }: EntityArgs) => {
  const render = (canvasCtx: CanvasRenderingContext2D): void => {
    canvasCtx.fillStyle = 'white';
    canvasCtx.fillRect(x, y, w, h);
  };

  return { render };
};

export default Entity;
