import moment from "moment";
import React from "react";
import { Text, View } from "react-native";
import colors from "../config/colors";
import styles from "../styles";

const HistoryItem = ({ points, goal, date }) => {
  return (
    <View
      style={[
        styles.history.item,
        { backgroundColor: points >= goal ? colors.green : colors.red },
      ]}
    >
      <Text style={[{ textAlign: "center" }, styles.history.points]}>
        {points} / {goal}
      </Text>
      <Text style={{ textAlign: "right" }}>
        {moment(date).format("DD. MM. YYYY HH:mm")}
      </Text>
    </View>
  );
};

export default HistoryItem;
