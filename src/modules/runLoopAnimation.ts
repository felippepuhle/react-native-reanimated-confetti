import Animated, { Easing } from 'react-native-reanimated';

const {
  Clock,
  Value,
  block,
  cond,
  set,
  startClock,
  clockRunning,
  not,
  and,
  timing,
  eq,
  add,
  greaterThan,
} = Animated;

type RunLoopAnimationParams = {
  delay: number;
  duration: number;
};

const runLoopAnimation = ({ delay, duration }: RunLoopAnimationParams) => {
  const clock = new Clock();

  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration,
    easing: Easing.quad,
    toValue: new Value(1),
  };

  const delayed = new Value(0);

  return block([
    cond(and(not(clockRunning(clock)), 1), startClock(clock)),
    cond(eq(delayed, 0), set(delayed, add(delay, clock))),
    cond(greaterThan(clock, delayed), timing(clock, state, config)),
    cond(state.finished, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.frameTime, 0),
      set(state.position, 0),
    ]),
    state.position,
  ]);
};

export default runLoopAnimation;
