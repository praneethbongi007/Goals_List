import { StyleSheet, Text, View, Pressable } from "react-native";

function Goalitems(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#3c027a" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default Goalitems;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
