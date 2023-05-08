import { controller } from 'scripts/controller';

import Entity from 'scripts/actors/entity';

import { EntityArgs, EntityType } from 'scripts/actors/entity';

type PlayerArgs = EntityArgs;

export interface PlayerType extends EntityType {
  input: () => void;
}

const Player = ({ size, pos, vel }: PlayerArgs): PlayerType => {
  const entity = Entity({ size, pos, vel });

  const input = () => {
    vel.x = 0;

    if (controller.right) {
      vel.x = 10;
    }
    if (controller.left) {
      vel.x = -10;
    }
  };

  return { ...entity, input };
};

export default Player;
