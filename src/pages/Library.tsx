import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Search, Star, Clock, Download, MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface Template {
  id: string;
  title: string;
  description: string;
  category: "Form" | "Report" | "Workflow" | "Checklist";
  lastModified: string;
  createdDate: string;
  status: "Draft" | "Published" | "Archived";
  usageCount: number;
}

const Library = () => {
  // Sample templates data
  const templates: Template[] = [
    {
      id: "TEMP-001",
      title: "Daily Inventory Count",
      description: "Standardized form for daily inventory counting and reconciliation",
      category: "Form",
      lastModified: "2023-12-01",
      createdDate: "2023-10-15",
      status: "Published",
      usageCount: 45
    },
    {
      id: "TEMP-002",
      title: "Monthly Sales Report",
      description: "Comprehensive sales report with charts and analysis sections",
      category: "Report",
      lastModified: "2023-11-20",
      createdDate: "2023-09-20",
      status: "Published",
      usageCount: 32
    },
    {
      id: "TEMP-003",
      title: "Staff Onboarding Process",
      description: "Complete workflow for new employee onboarding and training",
      category: "Workflow",
      lastModified: "2023-11-05",
      createdDate: "2023-11-05",
      status: "Draft",
      usageCount: 0
    },
    {
      id: "TEMP-004",
      title: "Kitchen Safety Checklist",
      description: "Daily safety and cleanliness verification checklist",
      category: "Checklist",
      lastModified: "2023-10-12",
      createdDate: "2023-08-12",
      status: "Published",
      usageCount: 78
    },
    {
      id: "TEMP-005",
      title: "Customer Feedback Form",
      description: "Customer satisfaction survey with rating scales and comments",
      category: "Form",
      lastModified: "2023-11-28",
      createdDate: "2023-10-28",
      status: "Published",
      usageCount: 56
    },
    {
      id: "TEMP-006",
      title: "Equipment Maintenance Log",
      description: "Detailed log for tracking equipment maintenance and repairs",
      category: "Form",
      lastModified: "2023-09-15",
      createdDate: "2023-09-15",
      status: "Archived",
      usageCount: 23
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Form": return <FileText className="w-4 h-4" />;
      case "Report": return <FileText className="w-4 h-4" />;
      case "Workflow": return <Clock className="w-4 h-4" />;
      case "Checklist": return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "bg-green-100 text-green-700";
      case "Draft": return "bg-orange-100 text-orange-700";
      case "Archived": return "bg-gray-100 text-gray-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeItem="library" />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Template Library</h1>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              + Create Template
            </Button>
          </div>

          <div className="mb-6 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search templates..." 
                className="pl-10 bg-white border-gray-200"
              />
            </div>
            <Button variant="outline">
              Filters
            </Button>
          </div>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Templates</TabsTrigger>
              <TabsTrigger value="published">Published</TabsTrigger>
              <TabsTrigger value="draft">Drafts</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Template</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Category</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Created</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Last Modified</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Status</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Usage</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {templates.map((template) => (
                        <TableRow key={template.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <TableCell className="py-4 px-6">
                            <div>
                              <div className="font-medium text-gray-900">{template.title}</div>
                              <div className="text-sm text-gray-500 truncate max-w-md">{template.description}</div>
                            </div>
                          </TableCell>
                          <TableCell className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              {getCategoryIcon(template.category)}
                              <span>{template.category}</span>
                            </div>
                          </TableCell>
                          <TableCell className="py-4 px-6 text-gray-600">{template.createdDate}</TableCell>
                          <TableCell className="py-4 px-6 text-gray-600">{template.lastModified}</TableCell>
                          <TableCell className="py-4 px-6">
                            <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(template.status)}`}>
                              {template.status}
                            </span>
                          </TableCell>
                          <TableCell className="py-4 px-6">
                            <div className="flex items-center gap-1">
                              <Download className="w-4 h-4 text-gray-400" />
                              <span>{template.usageCount}</span>
                            </div>
                          </TableCell>
                          <TableCell className="py-4 px-6">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="w-5 h-5" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem className="flex items-center gap-2">
                                  <Edit className="w-4 h-4" />
                                  <span>Edit</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center gap-2">
                                  <Download className="w-4 h-4" />
                                  <span>Download</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                                  <Trash2 className="w-4 h-4" />
                                  <span>Delete</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Similar TabsContent for other statuses */}
            <TabsContent value="published" className="mt-6">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Template</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Category</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Created</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Last Modified</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Status</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Usage</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {templates
                        .filter(template => template.status === "Published")
                        .map((template) => (
                          <TableRow key={template.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <TableCell className="py-4 px-6">
                              <div>
                                <div className="font-medium text-gray-900">{template.title}</div>
                                <div className="text-sm text-gray-500 truncate max-w-md">{template.description}</div>
                              </div>
                            </TableCell>
                            <TableCell className="py-4 px-6">
                              <div className="flex items-center gap-2">
                                {getCategoryIcon(template.category)}
                                <span>{template.category}</span>
                              </div>
                            </TableCell>
                            <TableCell className="py-4 px-6 text-gray-600">{template.createdDate}</TableCell>
                            <TableCell className="py-4 px-6 text-gray-600">{template.lastModified}</TableCell>
                            <TableCell className="py-4 px-6">
                              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(template.status)}`}>
                                {template.status}
                              </span>
                            </TableCell>
                            <TableCell className="py-4 px-6">
                              <div className="flex items-center gap-1">
                                <Download className="w-4 h-4 text-gray-400" />
                                <span>{template.usageCount}</span>
                              </div>
                            </TableCell>
                            <TableCell className="py-4 px-6">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="w-5 h-5" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem className="flex items-center gap-2">
                                    <Edit className="w-4 h-4" />
                                    <span>Edit</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="flex items-center gap-2">
                                    <Download className="w-4 h-4" />
                                    <span>Download</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                                    <Trash2 className="w-4 h-4" />
                                    <span>Delete</span>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Library;