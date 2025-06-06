import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

interface CalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  type: "Meeting" | "Task" | "Reminder" | "Deadline";
  description: string;
}

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  
  // Sample events data
  const events: CalendarEvent[] = [
    {
      id: "EVENT-001",
      title: "Monthly Staff Meeting",
      date: "2023-12-05",
      time: "10:00 AM",
      type: "Meeting",
      description: "Review monthly performance and upcoming events"
    },
    {
      id: "EVENT-002",
      title: "Inventory Deadline",
      date: "2023-12-10",
      time: "5:00 PM",
      type: "Deadline",
      description: "Complete monthly inventory counts"
    },
    {
      id: "EVENT-003",
      title: "New Menu Training",
      date: "2023-12-15",
      time: "2:00 PM",
      type: "Task",
      description: "Train staff on new seasonal menu items"
    },
    {
      id: "EVENT-004",
      title: "Supplier Meeting",
      date: "2023-12-18",
      time: "11:30 AM",
      type: "Meeting",
      description: "Meet with new produce supplier"
    },
    {
      id: "EVENT-005",
      title: "Holiday Promotion Launch",
      date: "2023-12-20",
      time: "9:00 AM",
      type: "Reminder",
      description: "Launch holiday special promotions"
    },
  ];

  // Helper functions for calendar rendering
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    // Create array for calendar days
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200 bg-gray-50"></div>);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = events.filter(event => event.date === date);
      
      days.push(
        <div key={day} className="h-24 border border-gray-200 p-1 overflow-hidden">
          <div className="flex justify-between items-center mb-1">
            <span className="font-medium text-sm">{day}</span>
            {dayEvents.length > 0 && (
              <span className="text-xs bg-green-100 text-green-800 rounded-full px-2 py-0.5">
                {dayEvents.length}
              </span>
            )}
          </div>
          <div className="space-y-1 overflow-y-auto max-h-16">
            {dayEvents.map((event, index) => (
              <div 
                key={event.id} 
                className={`text-xs p-1 rounded truncate ${getEventColor(event.type)}`}
                title={event.title}
              >
                {event.time} - {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return days;
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "Meeting": return "bg-blue-100 text-blue-800";
      case "Task": return "bg-purple-100 text-purple-800";
      case "Reminder": return "bg-yellow-100 text-yellow-800";
      case "Deadline": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    return events
      .filter(event => event.date >= todayStr)
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 5);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeItem="calendar" />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Plus className="w-4 h-4 mr-2" /> Add Event
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Calendar */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{formatMonth(currentMonth)}</h2>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" onClick={prevMonth}>
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" onClick={nextMonth}>
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-0">
                    {/* Day names */}
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="text-center font-medium text-sm py-2 border-b border-gray-200">
                        {day}
                      </div>
                    ))}
                    
                    {/* Calendar days */}
                    {renderCalendar()}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Upcoming Events */}
            <div>
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
                  <div className="space-y-3">
                    {getUpcomingEvents().map((event) => (
                      <div key={event.id} className="border-b border-gray-100 pb-3 last:border-0">
                        <div className="flex items-start gap-3">
                          <div className={`w-3 h-3 rounded-full mt-1.5 ${getEventColor(event.type)}`}></div>
                          <div>
                            <h3 className="font-medium text-gray-900">{event.title}</h3>
                            <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                            <p className="text-xs text-gray-500 mt-1">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Calendar;