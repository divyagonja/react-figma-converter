
import { Home, CheckSquare, AlertCircle, Workflow, Calendar, FileText, Book, Users, BarChart3, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeItem?: string;
}

const Sidebar = ({ activeItem = "home" }: SidebarProps) => {
  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "tasks", label: "Tasks", icon: CheckSquare },
    { id: "issues", label: "Issues", icon: AlertCircle },
    { id: "workflow", label: "Workflow", icon: Workflow },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "templates", label: "Browse Templates", icon: FileText },
    { id: "library", label: "Template Library", icon: Book },
    { id: "users", label: "User Management", icon: Users },
    { id: "reports", label: "Reports", icon: BarChart3 },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <CheckSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-sm text-gray-500">MANAGE</div>
            <div className="font-semibold text-gray-900">TASKS</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeItem === item.id
                    ? "bg-green-50 text-green-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-medium">
            A
          </div>
          <div>
            <div className="font-medium text-gray-900">Ajay</div>
            <div className="text-xs text-gray-500">Manager</div>
          </div>
        </div>
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm">
          <LogOut className="w-4 h-4" />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
