import { StyleSheet } from "react-native";
import colors from "./config/colors";

const deeds = StyleSheet.create({
  deed: {
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    borderRadius: 10,
    width: "90%",
    borderColor: colors.border,
    backgroundColor: "transparent",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 2,
  },
  deedName: {
    fontSize: 20,
    color: colors.text,
  },
  deedPoints: {
    textAlign: "right",
    color: colors.text,
  },
  list: {
    width: "100%",
    height: "90%",
  },
});

const common = StyleSheet.create({
  nav: {
    padding: 15,
    width: "100%",
    backgroundColor: colors.background,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: -5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 2,
    width: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    margin: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10,
    color: colors.text,
    textAlign: "center",
  },
  input: {
    padding: 10,
    fontSize: 15,
    textAlign: "center",
    borderWidth: 0.3,
    margin: 5,
    borderRadius: 20,
    margin: 2,
    paddingLeft: 20,
    textAlign: "left",
    color: colors.text,
    borderColor: colors.border,
  },
  button: {
    padding: 10,
    borderRadius: 20,
    borderColor: colors.border,
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: colors.text,
  },
  modal: {
    margin: 20,
    backgroundColor: colors.background,
    borderRadius: 20,
    overflow: "hidden",
    width: "80%",
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
});

const history = StyleSheet.create({
  container: {
    margin: 10,
  },
  list: {
    width: "90%",
  },
  item: {
    padding: 10,
    margin: 3,
    borderRadius: 20,
  },
  points: {
    fontSize: 17,
  },
});

export default { common, deeds, history };
