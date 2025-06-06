import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { AlertCircle, Clock, CheckCircle, XCircle } from "lucide-react";

interface Issue {
  id: string;
  title: string;
  reportedBy: string;
  reportedDate: string;
  severity: "Critical" | "Major" | "Minor";
  status: "Open" | "In Progress" | "Resolved" | "Ignored";
}

const Issues = () => {
  // Sample issue data
  const issues: Issue[] = [
    {
      id: "ISSUE-001",
      title: "System crash during inventory update",
      reportedBy: "John Doe",
      reportedDate: "2023-12-01",
      severity: "Critical",
      status: "In Progress"
    },
    {
      id: "ISSUE-002",
      title: "Incorrect pricing displayed on menu items",
      reportedBy: "Jane Smith",
      reportedDate: "2023-12-03",
      severity: "Major",
      status: "Open"
    },
    {
      id: "ISSUE-003",
      title: "Staff unable to log into scheduling system",
      reportedBy: "Mike Johnson",
      reportedDate: "2023-12-05",
      severity: "Critical",
      status: "Resolved"
    },
    {
      id: "ISSUE-004",
      title: "Minor UI alignment issue in reports section",
      reportedBy: "Sarah Williams",
      reportedDate: "2023-12-02",
      severity: "Minor",
      status: "Ignored"
    },
    {
      id: "ISSUE-005",
      title: "Slow response time during peak hours",
      reportedBy: "Alex Brown",
      reportedDate: "2023-12-04",
      severity: "Major",
      status: "In Progress"
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "text-red-600";
      case "Major": return "text-orange-600";
      case "Minor": return "text-blue-600";
      default: return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open": return <AlertCircle className="w-4 h-4 text-red-600" />;
      case "In Progress": return <Clock className="w-4 h-4 text-blue-600" />;
      case "Resolved": return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "Ignored": return <XCircle className="w-4 h-4 text-gray-600" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeItem="issues" />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Issues</h1>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              + Report Issue
            </Button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold text-gray-900 py-4 px-6">Issue ID</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6">Title</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6">Reported By</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6">Reported Date</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6">Severity</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900 py-4 px-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {issues.map((issue) => (
                  <TableRow key={issue.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <TableCell className="font-medium text-gray-900 py-4 px-6">{issue.id}</TableCell>
                    <TableCell className="py-4 px-6">{issue.title}</TableCell>
                    <TableCell className="py-4 px-6">{issue.reportedBy}</TableCell>
                    <TableCell className="py-4 px-6">{issue.reportedDate}</TableCell>
                    <TableCell className="py-4 px-6">
                      <span className={`${getSeverityColor(issue.severity)} font-medium`}>
                        {issue.severity}
                      </span>
                    </TableCell>
                    <TableCell className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(issue.status)}
                        <span>{issue.status}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 px-6">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="outline" size="sm">Update</Button>
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

export default Issues;