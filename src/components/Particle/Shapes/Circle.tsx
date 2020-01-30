import React from 'react';
import { Svg, Circle as SvgCircle } from 'react-native-svg';

import { IShape } from '../../../modules/types';

const Circle: IShape = props => (
  <Svg width={17} height={17} viewBox="0 0 17 17" {...props}>
    <SvgCircle
      transform="translate(8.500000, 8.500000) scale(-1, 1) rotate(180.000000) translate(-8.500000, -8.500000) "
      cx="8.5"
      cy="8.5"
      r="8.5"
    />
  </Svg>
);

Circle.colorProp = 'fill';
Circle.scale = .7;

export default Circle;
