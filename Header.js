import ReactSkgp from "react";
import { StyleSheet as StyleSheetSkgp, Text as TextSkgp, View as ViewSkgp } from "react-native";

export default function HeaderSkgp() {
  return (
    <ViewSkgp style={stylesSkgp.header}>
      <TextSkgp style={stylesSkgp.title}>Student Task &amp; Blog App</TextSkgp>
    </ViewSkgp>
  );
}

const stylesSkgp = StyleSheetSkgp.create({
  header: {
    padding: 20,
    backgroundColor: "#3F51B5",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
