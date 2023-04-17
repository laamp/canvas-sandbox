interface EntityArgs {
  x: number;
  y: number;
  w: number;
  h: number;
}

const Entity = ({ x, y, w, h }: EntityArgs) => {
  const render = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, w, h);
  };

  return { render };
};

export default Entity;
