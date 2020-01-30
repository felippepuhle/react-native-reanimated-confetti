import React from 'react';
import { Svg, Polygon } from 'react-native-svg';

import { IShape } from '../../../modules/types';

const Star: IShape = props => (
  <Svg width={27} height={27} viewBox="0 0 27 27" {...props}>
    <Polygon
      transform="translate(13.687640, 15.683241) scale(-1, 1) rotate(210.000000) translate(-13.687640, -15.683241) "
      points="13.6829879 24.030705 5.83981851 28.3664828 7.3411546 19.1893522 1 12.6931073 9.76749246 11.3506779 13.6916128 3 17.608885 11.3474636 26.3752793 12.6827056 20.0287943 19.1841513 21.5226036 28.3600542"
    />
  </Svg>
);

Star.colorProp = 'fill';
Star.scale = 1;

export default Star;
