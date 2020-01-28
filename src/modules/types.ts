import React from 'react';

type IShapeStaticProps = {
  colorProp: string;
  scale: number;
};

type IShapeProps = {
  width: number;
  height: number;
  style: {
    [key: string]: number | string;
  };
};

export type IShape = IShapeStaticProps & React.FC<IShapeProps>;

export type ILayout = {
  width: number;
  height: number;
};

export type IParticle = {
  size: number;
  shape: React.ReactNode;
  deltas: {
    left: number;
    bottom: number;
    swing: number;
    rotateX: number;
    rotateY: number;
    delay: number;
    duration: number;
  };
};
