import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'scripts/globals';
import { bindKeyHandlers } from 'scripts/controller';
import Entity from 'scripts/entity';

const GAME_STATE = {
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED'
};

const Game = (canvas: HTMLCanvasElement) => {
  // screen setup
  const canvasContext = canvas.getContext('2d');
  canvas.width = SCREEN_WIDTH;
  canvas.height = SCREEN_HEIGHT;

  // game setup
  const gameState = GAME_STATE.PLAYING;


  const start = () => {
    canvasContext.fillStyle = 'gray';
    canvasContext.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    const entity = Entity({ x: 10, y: 10, w: 64, h: 64 });

    entity.render(canvasContext);

    bindKeyHandlers();

    step();
  };

  const step = () => {
    if (gameState === GAME_STATE.PLAYING) {
      requestAnimationFrame(step);
    }
  };

  return { start };
};

export default Game;
