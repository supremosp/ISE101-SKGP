import {
  StyleSheet as StyleSheetskgp,
  Text as Textskgp,
  View as Viewskgp,
} from "react-native";

export default function FooterSkgp() {
  return (
    <Viewskgp style={stylesfooterskgp.footerSkgp}>
      <Textskgp style={stylesfooterskgp.textSkgp}>© 2026 Student App Project</Textskgp>
    </Viewskgp>
  );
}

const stylesfooterskgp = StyleSheetskgp.create({
  footerSkgp: {
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    padding: 12,
  },
  textSkgp: {
    color: "#E27653",
    fontSize: 12,
  },
});