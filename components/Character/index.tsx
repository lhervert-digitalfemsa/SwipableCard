import React from "react";
import Animated, { FadeIn, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { View, Text, Image, useWindowDimensions } from "react-native";
import styles from "./styles";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export type CharacterProps = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  image: string;
};

const Character = ({ name, image }: CharacterProps) => {
  const { width } = useWindowDimensions();
  const traslateX = useSharedValue(0);
  const direction = useSharedValue(0);
  const pan = Gesture.Pan()
    .onUpdate(({ translationX }) => {
      const swipRight = translationX > 0;
      direction.value = swipRight ? 1 : -1;
      console.log(translationX);
      traslateX.value = translationX;
    }).onEnd(() => {
      if (Math.abs(traslateX.value) > 250) traslateX.value = withTiming((width - 50) * direction.value);
      else traslateX.value = withTiming(0, { duration: 500 });
    });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: traslateX.value }],
    };
  });
  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.card, animatedStyles]} entering={FadeIn.duration(1000)}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default Character;