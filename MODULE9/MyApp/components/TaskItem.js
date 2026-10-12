import React as Reactjt from "react";
import {
  StyleSheet as StyleSheetjt,
  Text as Textjt,
  TouchableOpacity as TouchableOpacityjt,
  View as Viewjt,
} from "react-native";

export default function TaskItemjt({ task: taskjt, onDelete: onDeletejt }) {
  return (
    <Viewjt style={stylesjt.item}>
      <Textjt style={stylesjt.text}>{taskjt.toUpperCase()}</Textjt>
      <TouchableOpacityjt
        accessibilityRole="button"
        accessibilityLabel={`Delete ${taskjt}`}
        onPress={onDeletejt}
        style={stylesjt.deleteButton}
      >
        <Textjt style={stylesjt.delete}>Delete</Textjt>
      </TouchableOpacityjt>
    </Viewjt>
  );
}

const stylesjt = StyleSheetjt.create({
  item: {
    alignItems: "center",
    backgroundColor: "#d7f1f3",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    padding: 14,
  },
  text: {
    color: "#183d43",
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
  },
  deleteButton: {
    marginLeft: 12,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  delete: {
    color: "#b42318",
    fontSize: 14,
    fontWeight: "600",
  },
});
