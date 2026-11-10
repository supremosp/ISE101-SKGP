import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { announcementData } from '../../services/announcementData';
import type { Announcement } from '../../types/announcement';
import ActionButton from './ActionButton';
import AnnouncementCard from './AnnouncementCard';
import SectionHeading from './SectionHeading';

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(announcementData);
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

  const handleSelectAnnouncement = (id: string) => {
    router.push({ pathname: '/announcements/[id]' as any, params: { id } });
  };

  const handleRefresh = () => {
    setStatusMessage(
      unreadCount === 0
        ? 'Fresh updates are not available right now.'
        : `${unreadCount} unread message${unreadCount === 1 ? '' : 's'} ready for review.`
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={announcements}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={() => (
          <View>
            <SectionHeading title="Campus Connect" subtitle="One campus. Connected students." />

            <Text style={styles.count}>Unread Announcements: {unreadCount}</Text>
            <Text style={styles.status}>{statusMessage}</Text>

            <View style={styles.toolbar}>
              <Text style={styles.heading}>Campus Announcements</Text>
              <ActionButton label="Refresh" onPress={handleRefresh} />
            </View>
          </View>
        )}
        renderItem={({ item }) => (
          <AnnouncementCard
            key={item.id}
            item={item}
            onToggleRead={toggleRead}
            onPress={() => handleSelectAnnouncement(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 32,
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
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    flex: 1,
  },
});
