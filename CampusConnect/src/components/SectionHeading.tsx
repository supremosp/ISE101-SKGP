import { StyleSheet, Text, View } from 'react-native';

type SectionHeadingProps = {
  title?: string;
  subtitle?: string;
};

export default function SectionHeading({
  title = 'Campus Connect',
  subtitle = 'Campus updates in one place',
}: SectionHeadingProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    gap: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.5,
    color: '#101828',
  },
  subtitle: {
    fontSize: 15,
    color: '#526070',
  },
});
