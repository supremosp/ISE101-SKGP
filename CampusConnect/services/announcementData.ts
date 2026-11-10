import type { Announcement } from '../types/announcement';

export const announcementData: Announcement[] = [
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

export function getAnnouncementById(id: string): Announcement | undefined {
  return announcementData.find(item => item.id === id);
}
