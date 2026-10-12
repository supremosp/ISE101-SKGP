import {
  StatusBar as StatusBarskgp,
  StyleSheet as StyleSheetskgp,
  Text as Textskgp,
  View as Viewskgp,
} from "react-native";
import FooterSkgp from "../components/Footer";
import HeaderSkgp from "../components/Header";
import WelcomeMessageskgp from "../components/WelcomeMessage";

export default function HomeScreenskgp() {
  return (
    <Viewskgp style={styleshomeskgp.containerSkgp}>
      <StatusBarskgp barStyle="light-content" backgroundColor="#55736A" />
      <HeaderSkgp />
      <WelcomeMessageskgp />
      <Viewskgp style={styleshomeskgp.bodySkgp}>
        <Textskgp style={styleshomeskgp.headingSkgp}>Welcome to your first screen!</Textskgp>
        <Textskgp style={styleshomeskgp.descriptionSkgp}>
          This is built using JSX and reusable components.
        </Textskgp>
      </Viewskgp>
      <FooterSkgp />
    </Viewskgp>
  );
}

const styleshomeskgp = StyleSheetskgp.create({
  containerSkgp: {
    backgroundColor: "#F4F3EC",
    flex: 1,
  },
  bodySkgp: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  headingSkgp: {
    color: "#203B35",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  descriptionSkgp: {
    color: "#64716A",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
});