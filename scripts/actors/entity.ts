export interface EntityArgs {
  size: {
    w: number;
    h: number;
  };
  pos?: {
    x: number;
    y: number;
  };
  vel?: {
    x: number;
    y: number;
  };
}

export interface EntityType {
  applyVelocity: (deltaT: number) => void;
  render: (canvasCtx: CanvasRenderingContext2D) => void;
}

const Entity = ({ size, pos, vel }: EntityArgs): EntityType => {
  const gravity = 0;
  const maxVelocity = 100;

  const applyVelocity = (deltaT: number) => {
    const timeAdj = 0.01;
    pos.y += vel.y * (deltaT * timeAdj);
    pos.x += vel.x;

    vel.y += gravity * (deltaT * timeAdj);
    if (vel.y > maxVelocity) {
      vel.y = maxVelocity;
    }
  };

  const render = (canvasCtx: CanvasRenderingContext2D): void => {
    canvasCtx.fillStyle = 'white';
    canvasCtx.fillRect(pos.x, pos.y, size.w, size.h);
  };

  return { applyVelocity, render };
};

export default Entity;
