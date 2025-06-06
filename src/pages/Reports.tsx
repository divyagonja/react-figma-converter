import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, Download, Calendar, TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart } from "lucide-react";

const Reports = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeItem="reports" />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Reports & Analytics</h1>
            <div className="flex gap-3">
              <Select defaultValue="last30days">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last7days">Last 7 days</SelectItem>
                  <SelectItem value="last30days">Last 30 days</SelectItem>
                  <SelectItem value="last90days">Last 90 days</SelectItem>
                  <SelectItem value="lastYear">Last year</SelectItem>
                  <SelectItem value="custom">Custom range</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="mb-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="staff">Staff</TabsTrigger>
              <TabsTrigger value="custom">Custom Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6 space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">$24,780</h3>
                        <div className="flex items-center mt-1 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-green-600 font-medium">+12.5%</span>
                          <span className="text-gray-500 ml-1">from last month</span>
                        </div>
                      </div>
                      <div className="bg-green-100 p-3 rounded-full">
                        <DollarSign className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Total Orders</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">1,245</h3>
                        <div className="flex items-center mt-1 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-green-600 font-medium">+8.2%</span>
                          <span className="text-gray-500 ml-1">from last month</span>
                        </div>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-full">
                        <ShoppingCart className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Active Users</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">573</h3>
                        <div className="flex items-center mt-1 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-green-600 font-medium">+5.3%</span>
                          <span className="text-gray-500 ml-1">from last month</span>
                        </div>
                      </div>
                      <div className="bg-purple-100 p-3 rounded-full">
                        <Users className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Avg. Order Value</p>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">$19.90</h3>
                        <div className="flex items-center mt-1 text-sm">
                          <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                          <span className="text-red-600 font-medium">-2.1%</span>
                          <span className="text-gray-500 ml-1">from last month</span>
                        </div>
                      </div>
                      <div className="bg-amber-100 p-3 rounded-full">
                        <BarChart3 className="w-6 h-6 text-amber-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                    <CardDescription>Monthly revenue for the current year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center bg-gray-100 rounded-md">
                      {/* This would be a real chart in a production app */}
                      <div className="text-center">
                        <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">Revenue Chart Placeholder</p>
                        <p className="text-sm text-gray-400 mt-1">Bar chart showing monthly revenue</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Order Statistics</CardTitle>
                    <CardDescription>Order volume and completion rates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center bg-gray-100 rounded-md">
                      {/* This would be a real chart in a production app */}
                      <div className="text-center">
                        <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">Orders Chart Placeholder</p>
                        <p className="text-sm text-gray-400 mt-1">Line chart showing order trends</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest system events and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { event: "New user registered", time: "Today at 10:30 AM", description: "John Doe created a new account" },
                      { event: "Sales report generated", time: "Yesterday at 4:15 PM", description: "Monthly sales report for November was generated" },
                      { event: "Inventory updated", time: "Yesterday at 2:30 PM", description: "15 new items were added to inventory" },
                      { event: "System maintenance", time: "2023-12-01 at 11:00 PM", description: "Scheduled system maintenance completed" },
                      { event: "New template added", time: "2023-11-28 at 3:45 PM", description: "New inventory template was added to the library" },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="bg-blue-100 p-2 rounded-full mr-4">
                          <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{activity.event}</h4>
                          <p className="text-sm text-gray-500 mt-1">{activity.description}</p>
                          <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Other tab contents would be similar */}
            <TabsContent value="sales" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Reports</CardTitle>
                  <CardDescription>Detailed sales analytics and trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-96 flex items-center justify-center bg-gray-100 rounded-md">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Sales Analytics Placeholder</p>
                      <p className="text-sm text-gray-400 mt-1">This would contain detailed sales reports and charts</p>
                    </div>
                  </div>
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

export default Reports;