import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Announcement } from '../../types/announcement';

type AnnouncementCardProps = {
  item: Announcement;
  onToggleRead: (id: string) => void;
};

export default function AnnouncementCard({
  item,
  onToggleRead,
}: AnnouncementCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.meta}>Category: {item.category}</Text>
      <Text style={styles.meta}>Status: {item.read ? 'Read' : 'Unread'}</Text>

      <Pressable
        onPress={() => onToggleRead(item.id)}
        style={[styles.button, item.read && styles.buttonRead]}
      >
        <Text style={styles.buttonText}>
          {item.read ? 'Mark as unread' : 'Mark as read'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 6,
    color: '#1C2430',
  },
  meta: {
    fontSize: 14,
    color: '#4A5568',
    marginBottom: 4,
  },
  button: {
    marginTop: 12,
    backgroundColor: '#1A73E8',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  buttonRead: {
    backgroundColor: '#4B5563',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
