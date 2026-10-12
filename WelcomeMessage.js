import ReactSkgp from "react";
import { StyleSheet as StyleSheetSkgp, Text as TextSkgp, View as ViewSkgp } from "react-native";

export default function WelcomeMessageSkgp() {
  return (
    <ViewSkgp style={stylesSkgp.container}>
      <TextSkgp style={stylesSkgp.text}>Hello, Your Name!</TextSkgp>
      <TextSkgp style={stylesSkgp.text}>BSIS Section Your Section</TextSkgp>
    </ViewSkgp>
  );
}

const stylesSkgp = StyleSheetSkgp.create({
  container: {
    alignItems: "center",
    marginVertical: 12,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 3,
  },
});
