# Reanimated Confetti

Confetti with fully native 60 FPS animations!

## Installation

#### 1. Add reanimated-confetti to your dependencies:

```sh
yarn add reanimated-confetti
```

#### 2. Link native dependencies

We're using [react-native-svg](https://github.com/react-native-community/react-native-svg) under the hoods, so you'll need to link it.

From react-native 0.60 autolinking will take care of the link step but don't forget to run `pod install` in the `ios/` directory.

## Usage

```javascript
import React from 'react';
import Confetti from 'reanimated-confetti';

const Example = () => <Confetti />;

export default Example;
```

## Props

| name     | required | default                                                            | description                                  |
| -------- | -------- | ------------------------------------------------------------------ | -------------------------------------------- |
| count    | no       | 50                                                                 | particles quantity                           |
| duration | no       | 5000                                                               | animation duration for each particle (in ms) |
| minSize  | no       | 20                                                                 | particles min size                           |
| maxSize  | no       | 50                                                                 | particles max size                           |
| colors   | no       | ['#48b0f1', '#8fed8f', '#75f3c8', '#fff045', '#f357ac', '#b285fb'] | particles colors                             |

## Example

```sh
yarn
pod install --project-directory=example/ios
yarn start
yarn start:ios
```
