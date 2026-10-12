import {
  StyleSheet as StyleSheetskgp,
  Text as Textskgp,
  View as Viewskgp,
} from "react-native";

export default function HeaderSkgp() {
  return (
    <Viewskgp style={stylesheaderskgp.headerSkgp}>
      <Textskgp style={stylesheaderskgp.titleSkgp}>Student Task &amp; Blog App</Textskgp>
    </Viewskgp>
  );
}

const stylesheaderskgp = StyleSheetskgp.create({
  headerSkgp: {
    alignItems: "center",
    backgroundColor: "#55736A",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  titleSkgp: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});