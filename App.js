import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Goalitems from "./Components/Goalitem";
import GoalInput from "./Components/GoalInput";
export default function App() {
  const [listData, setListData] = useState([]);
  const [ModalVisible, setModalVisible] = useState(false);
  const startgoalInputHandler = () => {
    setModalVisible(true);
  };
  const endgoalInputHandler = () => {
    setModalVisible(false);
  };
  const addGoalHandler = (goalText) => {
    setListData((item) => [
      ...item,
      { text: goalText, id: Math.random().toString() },
    ]);
    endgoalInputHandler();

  };
  const onDeleteItem = (id) => {
    setListData((item) => {
      return item.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.container}>
      <Button
        title="Add New Goal"
        color="#6c5ce7"
        onPress={startgoalInputHandler}
      />
      <GoalInput visible={ModalVisible} addGoalHandler={addGoalHandler} endgoalInputHandler={endgoalInputHandler}/>
      <View style={styles.goalContainer}>
        <FlatList
          data={listData}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <Goalitems
                onDeleteItem={onDeleteItem}
                text={itemData.item.text}
                id={itemData.item.id}
              />
            );
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:"#1e085a"
  },

  goalContainer: {
    flex: 4,
  },
});
