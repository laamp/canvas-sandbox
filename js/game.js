const SCREEN_WIDTH = 1024;
const SCREEN_HEIGHT = 768;

const Game = (canvas) => {
  const canvasContext = canvas.getContext("2d");
  canvas.width = SCREEN_WIDTH;
  canvas.height = SCREEN_HEIGHT;

  const start = () => {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  };

  return { start };
};

export default Game;
