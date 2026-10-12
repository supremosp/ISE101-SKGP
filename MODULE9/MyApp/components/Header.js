import React as Reactjt from "react";
import { StyleSheet as StyleSheetjt, Text as Textjt, View as Viewjt } from "react-native";

export default function Headerjt() {
  return (
    <Viewjt style={stylesjt.header}>
      <Textjt style={stylesjt.title}>My Task Manager</Textjt>
      <Textjt style={stylesjt.subtitle}>A little progress every day</Textjt>
    </Viewjt>
  );
}

const stylesjt = StyleSheetjt.create({
  header: {
    backgroundColor: "#e0f7fa",
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  title: {
    color: "#123b45",
    fontSize: 23,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#42636a",
    fontSize: 14,
    marginTop: 3,
  },
});
