import React from 'react';

import Particle from '../components/Particle';
import { randomNumber, randomElementOfArray } from './helpers';
import { IShape, IParticle } from './types';

const SHAPES_KEYS = Object.keys(Particle.Shapes) as Array<
  keyof typeof Particle.Shapes
>;

type CreateParticleProps = {
  count: number;
  duration: number;
  minSize: number;
  maxSize: number;
  colors: string[];
  index: number;
};

const createParticle = ({
  count,
  duration,
  minSize,
  maxSize,
  colors,
  index,
}: CreateParticleProps): IParticle => {
  const shapeKey = randomElementOfArray(SHAPES_KEYS);
  const Shape: IShape = Particle.Shapes[shapeKey];
  const { scale, colorProp } = Shape;

  const size = randomNumber(minSize, maxSize) * scale;

  const minDelayThreshold = (index - 1) / (count - 1);
  const maxDelayThreshold = index / (count - 1);
  const minDelay = duration * minDelayThreshold;
  const maxDelay = duration * maxDelayThreshold;

  const minDuration = duration * 0.95;
  const maxDuration = duration * 1.05;

  return {
    size,
    shape: (
      <Shape
        width={size}
        height={size}
        style={{
          [colorProp]: randomElementOfArray(colors),
        }}
      />
    ),
    deltas: {
      left: randomNumber(0, 1),
      bottom: randomNumber(0, 3),
      swing: randomNumber(0.2, 1),
      rotateX: randomNumber(0.3, 1),
      rotateY: randomNumber(0.3, 1),
      delay: Math.max(0, randomNumber(minDelay, maxDelay)),
      duration: randomNumber(minDuration, maxDuration),
    },
  };
};

export default createParticle;
