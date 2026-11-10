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
      <View style={styles.headerRow}>
        <View style={styles.textGroup}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.meta}>Category: {item.category}</Text>
          <Text style={styles.meta}>Status: {item.read ? 'Read' : 'Unread'}</Text>
        </View>

        <View style={[styles.badge, item.read ? styles.badgeRead : styles.badgeUnread]}>
          <Text style={styles.badgeText}>{item.read ? 'Read' : 'New'}</Text>
        </View>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={
          item.read
            ? `Mark announcement ${item.title} as unread`
            : `Mark announcement ${item.title} as read`
        }
        onPress={() => onToggleRead(item.id)}
        style={({ pressed }) => [
          styles.button,
          item.read && styles.buttonRead,
          pressed && styles.buttonPressed,
        ]}
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
    borderRadius: 14,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 10,
  },
  textGroup: {
    flex: 1,
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
  badge: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 999,
    minWidth: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeRead: {
    backgroundColor: '#E5E7EB',
  },
  badgeUnread: {
    backgroundColor: '#DBEAFE',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1F2937',
  },
  button: {
    marginTop: 12,
    minHeight: 46,
    backgroundColor: '#1A73E8',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRead: {
    backgroundColor: '#4B5563',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
