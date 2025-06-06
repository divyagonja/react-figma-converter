
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface OutletData {
  name: string;
  tasks: {
    total: number;
    ongoing: number;
    completed: number;
  };
  issues: {
    total: number;
    ongoing: number;
    resolvedIgnored: number;
  };
  forms: {
    total: number;
    ongoingTask: number;
    completedTasks: number;
  };
}

const DataTable = () => {
  const outletData: OutletData[] = [
    {
      name: "The Gourmet Table",
      tasks: { total: 20, ongoing: 4, completed: 16 },
      issues: { total: 8, ongoing: 2, resolvedIgnored: 6 },
      forms: { total: 10, ongoingTask: 2, completedTasks: 4 }
    },
    {
      name: "Velvet Fork",
      tasks: { total: 24, ongoing: 2, completed: 22 },
      issues: { total: 9, ongoing: 3, resolvedIgnored: 6 },
      forms: { total: 12, ongoingTask: 3, completedTasks: 2 }
    },
    {
      name: "Ember & Sage",
      tasks: { total: 30, ongoing: 6, completed: 24 },
      issues: { total: 10, ongoing: 5, resolvedIgnored: 8 },
      forms: { total: 15, ongoingTask: 4, completedTasks: 6 }
    },
    {
      name: "The Cozy Spoon",
      tasks: { total: 12, ongoing: 1, completed: 11 },
      issues: { total: 12, ongoing: 4, resolvedIgnored: 8 },
      forms: { total: 8, ongoingTask: 1, completedTasks: 8 }
    },
    {
      name: "Bite Rush",
      tasks: { total: 18, ongoing: 7, completed: 35 },
      issues: { total: 5, ongoing: 1, resolvedIgnored: 4 },
      forms: { total: 6, ongoingTask: 0, completedTasks: 4 }
    },
    {
      name: "The Tandoori Hub",
      tasks: { total: 26, ongoing: 3, completed: 20 },
      issues: { total: 4, ongoing: 0, resolvedIgnored: 4 },
      forms: { total: 16, ongoingTask: 4, completedTasks: 6 }
    },
    {
      name: "Fusion Bites",
      tasks: { total: 32, ongoing: 5, completed: 28 },
      issues: { total: 6, ongoing: 6, resolvedIgnored: 4 },
      forms: { total: 15, ongoingTask: 6, completedTasks: 2 }
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-200">
            <TableHead className="font-semibold text-gray-900 py-4 px-6">Outlet Name</TableHead>
            <TableHead className="text-center font-semibold text-gray-900 py-4 px-4" colSpan={3}>Tasks</TableHead>
            <TableHead className="text-center font-semibold text-gray-900 py-4 px-4" colSpan={3}>Issues</TableHead>
            <TableHead className="text-center font-semibold text-gray-900 py-4 px-4" colSpan={3}>Forms</TableHead>
          </TableRow>
          <TableRow className="border-b border-gray-200 bg-gray-50">
            <TableHead className="py-3 px-6"></TableHead>
            <TableHead className="text-center text-sm font-medium text-gray-600 py-3 px-4">Total</TableHead>
            <TableHead className="text-center text-sm font-medium text-gray-600 py-3 px-4">Ongoing</TableHead>
            <TableHead className="text-center text-sm font-medium text-gray-600 py-3 px-4">Completed</TableHead>
            <TableHead className="text-center text-sm font-medium text-gray-600 py-3 px-4">Total</TableHead>
            <TableHead className="text-center text-sm font-medium text-gray-600 py-3 px-4">Ongoing</TableHead>
            <TableHead className="text-center text-sm font-medium text-gray-600 py-3 px-4">Resolved/ Ignored</TableHead>
            <TableHead className="text-center text-sm font-medium text-gray-600 py-3 px-4">Total</TableHead>
            <TableHead className="text-center text-sm font-medium text-gray-600 py-3 px-4">Ongoing Task</TableHead>
            <TableHead className="text-center text-sm font-medium text-gray-600 py-3 px-4">Completed Tasks</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {outletData.map((outlet, index) => (
            <TableRow key={index} className="border-b border-gray-100 hover:bg-gray-50">
              <TableCell className="font-medium text-gray-900 py-4 px-6">{outlet.name}</TableCell>
              <TableCell className="text-center py-4 px-4">{outlet.tasks.total}</TableCell>
              <TableCell className="text-center py-4 px-4">{outlet.tasks.ongoing}</TableCell>
              <TableCell className="text-center py-4 px-4">{outlet.tasks.completed}</TableCell>
              <TableCell className="text-center py-4 px-4">{outlet.issues.total}</TableCell>
              <TableCell className="text-center py-4 px-4">{outlet.issues.ongoing}</TableCell>
              <TableCell className="text-center py-4 px-4">{outlet.issues.resolvedIgnored}</TableCell>
              <TableCell className="text-center py-4 px-4">{outlet.forms.total}</TableCell>
              <TableCell className="text-center py-4 px-4">{outlet.forms.ongoingTask}</TableCell>
              <TableCell className="text-center py-4 px-4">{outlet.forms.completedTasks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
