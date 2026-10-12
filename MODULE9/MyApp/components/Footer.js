import React as Reactjt from "react";
import { StyleSheet as StyleSheetjt, Text as Textjt, View as Viewjt } from "react-native";

export default function Footerjt() {
  return (
    <Viewjt style={stylesjt.footer}>
      <Textjt style={stylesjt.text}>Stay focused and keep going!</Textjt>
    </Viewjt>
  );
}

const stylesjt = StyleSheetjt.create({
  footer: {
    alignItems: "center",
    backgroundColor: "#f4fbfc",
    borderTopColor: "#d7e7e9",
    borderTopWidth: 1,
    padding: 12,
  },
  text: {
    color: "#42636a",
    fontSize: 13,
  },
});
