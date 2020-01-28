import React, { useState, useCallback, memo } from 'react';
import { View, StyleSheet } from 'react-native';

import Particle from './components/Particle';
import createParticle from './modules/createParticle';
import { ILayout, IParticle } from './modules/types';

type Props = {
  count: number;
  duration: number;
  minSize: number;
  maxSize: number;
  colors: string[];
};

const Confetti = ({ count, duration, minSize, maxSize, colors }: Props) => {
  const [layout, setLayout] = useState<null | ILayout>(null);

  const [particles] = useState<IParticle[]>(() =>
    Array.from({ length: count }).map((_, index) =>
      createParticle({
        count,
        duration,
        minSize,
        maxSize,
        colors,
        index,
      })
    )
  );

  const onLayout = useCallback(
    event => setLayout(event.nativeEvent.layout),
    []
  );

  return (
    <View onLayout={onLayout} style={styles.container}>
      {layout &&
        particles.map((data, index) => (
          <Particle key={index} data={data} layout={layout} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
});

Confetti.defaultProps = {
  count: 50,
  duration: 5000,
  minSize: 20,
  maxSize: 30,
  colors: ['#48b0f1', '#8fed8f', '#75f3c8', '#fff045', '#f357ac', '#b285fb'],
};

export default memo(Confetti);
