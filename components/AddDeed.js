import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import styles from "../styles";
import AppButton from "./AppButton";
import colors from "../config/colors";

const AddDeed = ({ openModal }) => {
  return (
    <TouchableOpacity onPress={() => openModal()}>
      <View
        style={[
          styles.deeds.deed,
          { backgroundColor: colors.background, borderWidth: 0.5 },
        ]}
      >
        <Text style={{ fontSize: 30, color: colors.text, textAlign: "center" }}>
          +
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddDeed;
