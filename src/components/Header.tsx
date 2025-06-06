
import { Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotificationButton from "./NotificationButton";
import CreateButton from "./CreateButton";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Home breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>🏠</span>
          <span>Home</span>
        </div>

        {/* Right side - Date, notifications, profile */}
        <div className="flex items-center gap-4">
          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>24-03-2001</span>
          </div>

          {/* Notifications */}
          <NotificationButton />

          {/* Profile dropdown */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">HO Outlet name</span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </div>

          {/* Create button */}
          <CreateButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
