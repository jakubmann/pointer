import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import {
  Modal,
  Text,
  SafeAreaView,
  TextInput,
  View,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { BlurView } from "expo-blur";
import SwitchSelector from "react-native-switch-selector";
import { createDeed, editDeed, deleteDeed } from "../slices/pointsSlice";
import { setEditDeedData } from "../slices/inputSlice";
import styles from "../styles";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const CreateDeed = ({ visible, closeModal }) => {
  const [deedName, setDeedName] = useState("");
  const [deedPoints, setDeedPoints] = useState("");
  const [deedType, setDeedType] = useState("add");
  const [deedId, setDeedId] = useState();
  const [edit, setEdit] = useState(false);
  const [switchValue, setSwitchValue] = useState(0);
  const editData = useSelector((state) => state.input.editDeedData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !(Object.keys(editData).length === 0 && editData.constructor === Object)
    ) {
      setEdit(true);
      setDeedName(editData.name);
      setDeedPoints(editData.points.toString());
      setDeedType(editData.type);
      setDeedId(editData.id);
      setSwitchValue(editData.type === "add" ? 0 : 1);
    } else {
      setEdit(false);
    }
  }, [editData]);

  const clear = () => {
    dispatch(setEditDeedData({}));
    setDeedType("add");
    setDeedName("");
    setDeedPoints("");
    setDeedId("");
    setSwitchValue(0);
  };

  const removeDeed = () => {
    dispatch(deleteDeed(deedId));
    closeModal();
    clear();
  };

  const deleteAlert = () => {
    Alert.alert("Alert", "Do you really want to delete this?", [
      {
        text: "Yes",
        onPress: removeDeed,
      },
      {
        text: "No",
      },
    ]);
  };

  const makeDeed = () => {
    if (deedName !== "" && deedPoints !== "" && !isNaN(deedPoints)) {
      const data = {
        name: deedName,
        points: deedPoints,
        type: deedType,
      };

      if (edit) {
        dispatch(editDeed({ data: data, id: deedId }));
        clear();
      } else {
        dispatch(createDeed(data));
      }
      closeModal();
    } else {
      Alert.alert(
        "Alert",
        "Please enter all information in the correct format.",
        [
          {
            text: "OK",
          },
        ]
      );
    }
  };

  return (
    <Modal
      visible={visible}
      animated={true}
      animationType={"slide"}
      transparent={true}
    >
      <View style={styles.common.centeredView}>
        <BlurView style={styles.common.modal} intensity={90} tint={"light"}>
          <Text style={styles.common.text}>
            {edit ? "Edit" : "Create"} Deed
          </Text>
          <TextInput
            //name
            style={styles.common.input}
            value={deedName}
            onChangeText={setDeedName}
            placeholder="Name"
            placeholderTextColor={colors.placeholder}
          />
          <TextInput
            style={[styles.common.input, { marginTop: 10 }]}
            value={deedPoints}
            onChangeText={setDeedPoints}
            keyboardType="number-pad"
            returnKeyType="done"
            placeholder="Points"
            placeholderTextColor={colors.placeholder}
          />

          <SwitchSelector
            initial={switchValue}
            value={switchValue}
            style={{ marginTop: 10 }}
            buttonColor={deedType === "add" ? colors.green : colors.red}
            backgroundColor={colors.secondaryBackground}
            textColor={colors.placeholder}
            selectedColor={colors.text}
            options={[
              { label: "Add points", value: "add" },
              { label: "Remove points", value: "remove" },
            ]}
            onPress={(value) => setDeedType(value)}
            borderColor={colors.border}
          />

          <View style={{ marginTop: 20 }}>
            <AppButton
              style={{ backgroundColor: colors.green }}
              title={edit ? "Edit" : "Create"}
              onPress={() => {
                makeDeed();
              }}
            />
            {edit ? (
              <AppButton
                style={{ backgroundColor: colors.red, marginTop: 10 }}
                title="Delete"
                onPress={deleteAlert}
              />
            ) : (
              <View />
            )}
            <AppButton
              style={{ backgroundColor: colors.red, marginTop: 10 }}
              title="Cancel"
              onPress={() => {
                closeModal();
                clear();
              }}
            />
          </View>
        </BlurView>
      </View>
    </Modal>
  );
};

export default CreateDeed;
