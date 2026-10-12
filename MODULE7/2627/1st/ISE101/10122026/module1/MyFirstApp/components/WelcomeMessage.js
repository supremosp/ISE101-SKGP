import {
  StyleSheet as StyleSheetskgp,
  Text as Textskgp,
  View as Viewskgp,
} from "react-native";

export default function WelcomeMessageskgp() {
  return (
    <Viewskgp style={styleswelcomeskgp.containerSkgp}>
      <Textskgp style={styleswelcomeskgp.nameSkgp}>Hello, Joshua!</Textskgp>
      <Textskgp style={styleswelcomeskgp.sectionSkgp}>BSIS Section 3A</Textskgp>
    </Viewskgp>
  );
}

const styleswelcomeskgp = StyleSheetskgp.create({
  containerSkgp: {
    borderLeftColor: "#E27653",
    borderLeftWidth: 4,
    marginHorizontal: 24,
    marginTop: 24,
    paddingLeft: 16,
    paddingVertical: 4,
  },
  nameSkgp: {
    color: "#203B35",
    fontSize: 25,
    fontWeight: "700",
  },
  sectionSkgp: {
    color: "#64716A",
    fontSize: 16,
    marginTop: 5,
  },
});