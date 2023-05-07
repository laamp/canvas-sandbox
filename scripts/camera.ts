import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'scripts/globals';

const Camera = ({ gameObjects, canvasCtx }) => {
  const render = () => {
    // Clear screen before each render
    canvasCtx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    canvasCtx.fillStyle = 'black';
    canvasCtx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    gameObjects.player.render(canvasCtx);
  };

  const update = () => {
    render();
  };

  return { update };
};

export default Camera;
