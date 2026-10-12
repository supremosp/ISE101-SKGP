import ReactSkgp from "react";
import { StyleSheet as StyleSheetSkgp, Text as TextSkgp, View as ViewSkgp } from "react-native";

export default function FooterSkgp() {
  return (
    <ViewSkgp style={stylesSkgp.footer}>
      <TextSkgp style={stylesSkgp.text}>© 2026 Student App Project</TextSkgp>
    </ViewSkgp>
  );
}

const stylesSkgp = StyleSheetSkgp.create({
  footer: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "#555555",
  },
});
