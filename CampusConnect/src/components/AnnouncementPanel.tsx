import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { Announcement } from '../../types/announcement';
import AnnouncementCard from './AnnouncementCard';

const initialAnnouncements: Announcement[] = [
  {
    id: 'a1',
    title: 'Enrollment reminders',
    category: 'Academic',
    read: false,
  },
  {
    id: 'a2',
    title: 'Campus orientation',
    category: 'Events',
    read: true,
  },
  {
    id: 'a3',
    title: 'Library schedule',
    category: 'Notice',
    read: false,
  },
];

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);
  const [statusMessage, setStatusMessage] = useState('Loading announcements...');

  const unreadCount = announcements.filter(item => !item.read).length;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStatusMessage(
        unreadCount === 0
          ? 'You are all caught up.'
          : `${unreadCount} unread announcement${unreadCount === 1 ? '' : 's'} awaiting review.`
      );
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [unreadCount]);

  const toggleRead = (id: string) => {
    setAnnouncements(currentAnnouncements =>
      currentAnnouncements.map(item =>
        item.id === id ? { ...item, read: !item.read } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.subtitle}>One campus. Connected students.</Text>

      <Text style={styles.count}>Unread Announcements: {unreadCount}</Text>
      <Text style={styles.status}>{statusMessage}</Text>

      <Text style={styles.heading}>Campus Announcements</Text>

      {announcements.map(item => (
        <AnnouncementCard key={item.id} item={item} onToggleRead={toggleRead} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F4F7FB',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    color: '#101828',
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 24,
    color: '#475467',
  },
  count: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 6,
    color: '#1F2937',
  },
  status: {
    fontSize: 13,
    color: '#2563EB',
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    color: '#111827',
  },
});
