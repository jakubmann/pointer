import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles";

import PerformDeed from "../components/PerformDeed";
import AddDeed from "../components/AddDeed";
import CreateDeed from "../modals/CreateDeed";
import colors from "../config/colors";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const deeds = useSelector((state) => state.points.deeds);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.log(deeds);
  }, [deeds]);

  const deedItem = ({ item }) => (
    <PerformDeed
      deed={item}
      openModal={() => setModalOpen(true)}
      dispatch={dispatch}
    />
  );

  return (
    <SafeAreaView style={styles.common.centeredView}>
      <CreateDeed visible={modalOpen} closeModal={() => setModalOpen(false)} />
      {/*
			<Button style={styles.button} title="Add point" onPress={() => dispatch(increment())} />
			<Button style={styles.button} title="Remove point" onPress={() => dispatch(decrement())} />
			*/}
      <FlatList
        style={styles.deeds.list}
        data={deeds}
        renderItem={deedItem}
        keyExtractor={(deed) => deed.name}
        ListFooterComponent={<AddDeed openModal={() => setModalOpen(true)} />}
      />
      <View style={styles.common.nav}>
        <TouchableOpacity
          //style={styles.common.nav}
          onPress={() => navigation.navigate("Total")}
        >
          <Text
            style={{
              color: colors.text,
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              borderWidth: 0.5,
              borderRadius: 20,
              borderColor: colors.border
            }}
          >
            TOTAL
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
