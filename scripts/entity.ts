const Entity = ({ x, y, w, h }) => {
  const render = (canvasCtx: CanvasRenderingContext2D): void => {
    canvasCtx.fillStyle = 'white';
    canvasCtx.fillRect(x, y, w, h);
  };

  return { render };
};

export default Entity;
