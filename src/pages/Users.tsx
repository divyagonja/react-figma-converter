import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Search, MoreHorizontal, Edit, Trash2, UserPlus, Mail, Shield } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Manager" | "Staff" | "Viewer";
  status: "Active" | "Inactive";
  lastActive: string;
  joinDate: string;
}

const Users = () => {
  // Sample users data
  const users: User[] = [
    {
      id: "USR-001",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      lastActive: "Today at 10:30 AM",
      joinDate: "2023-01-15"
    },
    {
      id: "USR-002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Manager",
      status: "Active",
      lastActive: "Yesterday at 4:15 PM",
      joinDate: "2023-02-20"
    },
    {
      id: "USR-003",
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      role: "Staff",
      status: "Active",
      lastActive: "Today at 9:45 AM",
      joinDate: "2023-03-10"
    },
    {
      id: "USR-004",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      role: "Staff",
      status: "Inactive",
      lastActive: "2023-11-28 at 2:30 PM",
      joinDate: "2023-04-05"
    },
    {
      id: "USR-005",
      name: "Alex Brown",
      email: "alex.brown@example.com",
      role: "Viewer",
      status: "Active",
      lastActive: "Today at 11:20 AM",
      joinDate: "2023-05-15"
    },
    {
      id: "USR-006",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      role: "Manager",
      status: "Active",
      lastActive: "Yesterday at 3:45 PM",
      joinDate: "2023-06-22"
    },
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Admin": return <Shield className="w-4 h-4 text-purple-600" />;
      case "Manager": return <Shield className="w-4 h-4 text-blue-600" />;
      case "Staff": return <Shield className="w-4 h-4 text-green-600" />;
      case "Viewer": return <Shield className="w-4 h-4 text-gray-600" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-700";
      case "Inactive": return "bg-gray-100 text-gray-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeItem="users" />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">User Management</h1>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <UserPlus className="w-4 h-4 mr-2" /> Add User
            </Button>
          </div>

          <div className="mb-6 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search users..." 
                className="pl-10 bg-white border-gray-200"
              />
            </div>
            <Button variant="outline">
              Filters
            </Button>
          </div>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Users</TabsTrigger>
              <TabsTrigger value="admin">Admins</TabsTrigger>
              <TabsTrigger value="manager">Managers</TabsTrigger>
              <TabsTrigger value="staff">Staff</TabsTrigger>
              <TabsTrigger value="viewer">Viewers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Name</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Email</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Role</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Status</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Last Active</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Join Date</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <TableCell className="py-4 px-6">
                            <div className="font-medium text-gray-900">{user.name}</div>
                          </TableCell>
                          <TableCell className="py-4 px-6 text-gray-600">{user.email}</TableCell>
                          <TableCell className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              {getRoleIcon(user.role)}
                              <span>{user.role}</span>
                            </div>
                          </TableCell>
                          <TableCell className="py-4 px-6">
                            <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(user.status)}`}>
                              {user.status}
                            </span>
                          </TableCell>
                          <TableCell className="py-4 px-6 text-gray-600">{user.lastActive}</TableCell>
                          <TableCell className="py-4 px-6 text-gray-600">{user.joinDate}</TableCell>
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
                                  <Mail className="w-4 h-4" />
                                  <span>Send Email</span>
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
            
            {/* Similar TabsContent for other roles */}
            <TabsContent value="admin" className="mt-6">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Name</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Email</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Role</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Status</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Last Active</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Join Date</TableHead>
                        <TableHead className="font-semibold text-gray-900 py-4 px-6">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users
                        .filter(user => user.role === "Admin")
                        .map((user) => (
                          <TableRow key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <TableCell className="py-4 px-6">
                              <div className="font-medium text-gray-900">{user.name}</div>
                            </TableCell>
                            <TableCell className="py-4 px-6 text-gray-600">{user.email}</TableCell>
                            <TableCell className="py-4 px-6">
                              <div className="flex items-center gap-2">
                                {getRoleIcon(user.role)}
                                <span>{user.role}</span>
                              </div>
                            </TableCell>
                            <TableCell className="py-4 px-6">
                              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(user.status)}`}>
                                {user.status}
                              </span>
                            </TableCell>
                            <TableCell className="py-4 px-6 text-gray-600">{user.lastActive}</TableCell>
                            <TableCell className="py-4 px-6 text-gray-600">{user.joinDate}</TableCell>
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
                                    <Mail className="w-4 h-4" />
                                    <span>Send Email</span>
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

export default Users;