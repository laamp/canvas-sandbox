import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'scripts/globals';
import { bindKeyHandlers } from 'scripts/controller';

import Camera from 'scripts/camera';
import Entity from 'scripts/entity';

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

  // Entry point for game
  const start = () => {
    const entity = Entity({ x: 10, y: 10, w: 64, h: 64 });
    gameObjects.player = entity;

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
    camera.update();

    if (gameState === GAME_STATE.PLAYING) {
      requestAnimationFrame(onFrame);
    }
  };

  return { start };
};

export default Game;
