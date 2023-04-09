import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'scripts/globals';
import { bindKeyHandlers } from 'scripts/controller';

const Game = (canvas: HTMLCanvasElement) => {
  const canvasContext = canvas.getContext('2d');
  canvas.width = SCREEN_WIDTH;
  canvas.height = SCREEN_HEIGHT;

  const start = () => {
    canvasContext.fillStyle = 'wheat';
    canvasContext.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    bindKeyHandlers();
  };

  return { start };
};

export default Game;
