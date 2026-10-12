import ReactSkgp from "react";
import { StyleSheet as StyleSheetSkgp, Text as TextSkgp, View as ViewSkgp } from "react-native";
import FooterSkgp from "../components/Footer";
import HeaderSkgp from "../components/Header";
import WelcomeMessageSkgp from "../components/WelcomeMessage";

export default function HomeScreenSkgp() {
  return (
    <ViewSkgp style={stylesSkgp.container}>
      <HeaderSkgp />
      <WelcomeMessageSkgp />
      <ViewSkgp style={stylesSkgp.body}>
        <TextSkgp style={stylesSkgp.text}>Welcome to your first screen!</TextSkgp>
        <TextSkgp style={stylesSkgp.text}>
          This is built using JSX and reusable components.
        </TextSkgp>
      </ViewSkgp>
      <FooterSkgp />
    </ViewSkgp>
  );
}

const stylesSkgp = StyleSheetSkgp.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: "center",
  },
});
