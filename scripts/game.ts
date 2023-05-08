import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'scripts/globals';
import { bindKeyHandlers } from 'scripts/controller';

import Camera from 'scripts/camera';
import Player from 'scripts/actors/entity';

import { GameObjects } from 'scripts/interfaces';

const GAME_STATE = {
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED'
};

interface GameType {
  start: () => void;
}

const Game = (canvas: HTMLCanvasElement): GameType => {
  // Screen setup
  const canvasCtx = canvas.getContext('2d');
  canvas.width = SCREEN_WIDTH;
  canvas.height = SCREEN_HEIGHT;

  // Game setup
  const gameState = GAME_STATE.PLAYING;
  const gameObjects: GameObjects = { player: null };
  const camera = Camera({ canvasCtx, gameObjects });

  let timeSinceLastFrame = 0;
  let previousTime = Date.now();

  // Entry point for game
  const start = () => {
    const player = Player({
      pos: { x: 10, y: 10 },
      size: { w: 64, h: 64 },
      vel: { x: 0, y: 0 }
    });
    gameObjects.player = player;

    bindKeyHandlers();

    onFrame();
  };

  // Every tick, run as fast as possible
  // Detect collision
  // const onTick = () => {

  // };

  // Every frame, happens at regular intervals
  // Apply forces to objects, update camera
  const onFrame = () => {
    const currentTime = Date.now();
    timeSinceLastFrame = currentTime - previousTime;
    previousTime = currentTime;

    gameObjects.player.applyVelocity(timeSinceLastFrame);
    console.log('***', gameObjects);
    gameObjects.player.input();

    camera.update();

    if (gameState === GAME_STATE.PLAYING) {
      requestAnimationFrame(onFrame);
    }
  };

  return { start };
};

export default Game;
