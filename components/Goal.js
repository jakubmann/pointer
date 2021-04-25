import React from "react";
import { View, Text, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles";
import AppButton from "./AppButton";
import { clearPoints } from "../slices/pointsSlice";

const Goal = (props) => {
  const dispatch = useDispatch();

  const clearGoal = () => {
    Alert.alert("Alert", "Are You Sure?", [
      {
        text: "Yes",
        onPress: () => dispatch(clearPoints()),
      },
      {
        text: "No",
      },
    ]);
  };

  return (
    <View>
      <AppButton title="Set goal" onPress={props.openModal} />
      <AppButton title="Reset Points" onPress={clearGoal} />
    </View>
  );
};

export default Goal;
