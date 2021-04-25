import React from "react";
import { Animated, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../config/colors";
import { performDeed } from "../slices/pointsSlice";
import { setEditDeedData } from "../slices/inputSlice";
import styles from "../styles";

const PerformAction = ({ deed, dispatch, openModal }) => {
  let opacity = new Animated.Value(0.15);

  const toggleOpacity = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0.15,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(performDeed(deed.id));
        toggleOpacity();
      }}
      onLongPress={() => {
        dispatch(setEditDeedData(deed));
        openModal();
      }}
    >
      <View style={[styles.deeds.deed]}>
        <Animated.View
          style={{
            backgroundColor: deed.type === "add" ? colors.green : colors.red,
            opacity: opacity,
            position: "absolute",
            flex: 1,
            height: 100,
            left: -20,
            width: "120%",
          }}
        ></Animated.View>
        <Text style={styles.deeds.deedName}>{deed.name}</Text>
        <Text style={styles.deeds.deedPoints}>
          {deed.type === "add" ? "+" : "-"}
          {deed.points}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PerformAction;
