export const controller = {
  left: false,
  right: false,
  up: false,
  down: false,
  jump: false,
  attack: false
};

export const bindKeyHandlers = () => {
  window.onkeydown = (e) => {
    if (e.repeat) return;
    if (e.key === 'a') controller.left = true;
    if (e.key === 'd') controller.right = true;
    if (e.key === 'w') controller.up = true;
    if (e.key === 's') controller.down = true;
    if (e.key === 'l') controller.jump = true;
    if (e.key === 'k') controller.attack = true;
  };

  window.onkeyup = (e) => {
    if (e.repeat) return;
    if (e.key === 'a') controller.left = false;
    if (e.key === 'd') controller.right = false;
    if (e.key === 'w') controller.up = false;
    if (e.key === 's') controller.down = false;
    if (e.key === 'l') controller.jump = false;
    if (e.key === 'k') controller.attack = false;
  };
};
