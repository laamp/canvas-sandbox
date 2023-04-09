import 'styles/main';

import Game from 'scripts/game';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');

  const game = Game(canvas);

  game.start();
});
