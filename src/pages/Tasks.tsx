import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CheckSquare, Clock, CheckCircle } from "lucide-react";

interface Task {
  id: string;
  title: string;
  assignee: string;
  dueDate: string;
  priority: "High" | "Medium" | "Low";
  status: "Pending" | "In Progress" | "Completed";
}

const Tasks = () => {
  // Sample task data
  const tasks: Task[] = [
    {
      id: "TASK-001",
      title: "Update inventory management system",
      assignee: "John Doe",
      dueDate: "2023-12-15",
      priority: "High",
      status: "In Progress"
    },
    {
      id: "TASK-002",
      title: "Review quarterly sales report",
      assignee: "Jane Smith",
      dueDate: "2023-12-10",
      priority: "Medium",
      status: "Pending"
    },
    {
      id: "TASK-003",
      title: "Prepare staff training materials",
      assignee: "Mike Johnson",
      dueDate: "2023-12-20",
      priority: "Medium",
      status: "Pending"
    },
    {
      id: "TASK-004",
      title: "Update website content",
      assignee: "Sarah Williams",
      dueDate: "2023-12-05",
      priority: "Low",
      status: "Completed"
    },
    {
      id: "TASK-005",
      title: "Conduct customer satisfaction survey",
      assignee: "Alex Brown",
      dueDate: "2023-12-18",
      priority: "High",
      status: "In Progress"
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-red-600";
      case "Medium": return "text-orange-600";
      case "Low": return "text-blue-600";
      default: return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pending": return <Clock className="w-4 h-4 text-orange-600" />;
      case "In Progress": return <CheckSquare className="w-4 h-4 text-blue-600" />;
      case "Completed": return <CheckCircle className="w-4 h-4 text-green-600" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeItem="tasks" />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Tasks</h1>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              + New Task
            </Button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold text-gray-900 py-4 px-6">Task ID</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6">Title</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6">Assignee</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6">Due Date</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6">Priority</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <TableCell className="font-medium text-gray-900 py-4 px-6">{task.id}</TableCell>
                    <TableCell className="py-4 px-6">{task.title}</TableCell>
                    <TableCell className="py-4 px-6">{task.assignee}</TableCell>
                    <TableCell className="py-4 px-6">{task.dueDate}</TableCell>
                    <TableCell className="py-4 px-6">
                      <span className={`${getPriorityColor(task.priority)} font-medium`}>
                        {task.priority}
                      </span>
                    </TableCell>
                    <TableCell className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(task.status)}
                        <span>{task.status}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 px-6">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Delete</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Tasks;