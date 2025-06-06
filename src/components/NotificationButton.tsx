import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

type Notification = {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: 'info' | 'warning' | 'success' | 'error';
};

const sampleNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Task Assigned',
    description: 'You have been assigned a new task: "Update user documentation"',
    time: '10 minutes ago',
    read: false,
    type: 'info',
  },
  {
    id: '2',
    title: 'Deadline Approaching',
    description: 'Task "Quarterly report" is due in 2 days',
    time: '1 hour ago',
    read: false,
    type: 'warning',
  },
  {
    id: '3',
    title: 'Issue Resolved',
    description: 'Issue #1234 has been marked as resolved',
    time: '3 hours ago',
    read: true,
    type: 'success',
  },
  {
    id: '4',
    title: 'System Maintenance',
    description: 'Scheduled maintenance will occur on Sunday at 2AM',
    time: '1 day ago',
    read: true,
    type: 'info',
  },
  {
    id: '5',
    title: 'Error in Workflow',
    description: 'Workflow "Content Approval" has encountered an error',
    time: '2 days ago',
    read: true,
    type: 'error',
  },
];

const getTypeStyles = (type: Notification['type']) => {
  switch (type) {
    case 'info':
      return 'bg-blue-100 text-blue-600';
    case 'warning':
      return 'bg-amber-100 text-amber-600';
    case 'success':
      return 'bg-green-100 text-green-600';
    case 'error':
      return 'bg-red-100 text-red-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

const NotificationButton = () => {
  const [notifications, setNotifications] = useState<Notification[]>(sampleNotifications);
  const [open, setOpen] = useState(false);
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };
  
  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between border-b border-gray-200 p-3">
          <h3 className="font-medium">Notifications</h3>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs h-8"
              onClick={markAllAsRead}
            >
              Mark all as read
            </Button>
          )}
        </div>
        <div className="max-h-80 overflow-y-auto">
          {notifications.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={cn(
                    "p-3 hover:bg-gray-50 cursor-pointer",
                    !notification.read && "bg-gray-50"
                  )}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn("p-2 rounded-full", getTypeStyles(notification.type))}>
                      <div className="h-2 w-2 rounded-full bg-current" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className={cn("text-sm font-medium", !notification.read && "text-gray-900")}>
                          {notification.title}
                        </p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {notification.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center">
              <p className="text-sm text-gray-500">No notifications</p>
            </div>
          )}
        </div>
        <div className="border-t border-gray-200 p-3">
          <Button variant="outline" size="sm" className="w-full text-xs">
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationButton;