import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { getAnnouncementById } from '../../../services/announcementData';

export default function AnnouncementDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const announcement = typeof id === 'string' ? getAnnouncementById(id) : undefined;

  if (!announcement) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Announcement not found</Text>
        <Text style={styles.description}>
          The announcement you requested could not be found.
        </Text>
        <Pressable onPress={() => router.back()} style={styles.button}>
          <Text style={styles.buttonText}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Announcement details</Text>
      <Text style={styles.title}>{announcement.title}</Text>
      <Text style={styles.meta}>Category: {announcement.category}</Text>
      <Text style={styles.meta}>Status: {announcement.read ? 'Read' : 'Unread'}</Text>

      <Pressable onPress={() => router.back()} style={styles.button}>
        <Text style={styles.buttonText}>Back to announcements</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F4F7FB',
    justifyContent: 'center',
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563EB',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#101828',
    marginBottom: 12,
  },
  meta: {
    fontSize: 16,
    color: '#475467',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#475467',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    maxWidth: 260,
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: '#174A7E',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
