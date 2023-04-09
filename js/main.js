import 'css/main';

import Game from 'js/game';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("gameCanvas");

  const game = Game(canvas);

  game.start();
});
