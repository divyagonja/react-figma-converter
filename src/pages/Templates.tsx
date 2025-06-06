import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Search, Star, Clock, Download } from "lucide-react";

interface Template {
  id: string;
  title: string;
  description: string;
  category: "Form" | "Report" | "Workflow" | "Checklist";
  thumbnail: string;
  rating: number;
  downloads: number;
  createdDate: string;
  isPremium: boolean;
}

const Templates = () => {
  // Sample templates data
  const templates: Template[] = [
    {
      id: "TEMP-001",
      title: "Daily Inventory Count",
      description: "Standardized form for daily inventory counting and reconciliation",
      category: "Form",
      thumbnail: "/placeholder.svg",
      rating: 4.5,
      downloads: 1250,
      createdDate: "2023-10-15",
      isPremium: false
    },
    {
      id: "TEMP-002",
      title: "Monthly Sales Report",
      description: "Comprehensive sales report with charts and analysis sections",
      category: "Report",
      thumbnail: "/placeholder.svg",
      rating: 4.8,
      downloads: 980,
      createdDate: "2023-09-20",
      isPremium: true
    },
    {
      id: "TEMP-003",
      title: "Staff Onboarding Process",
      description: "Complete workflow for new employee onboarding and training",
      category: "Workflow",
      thumbnail: "/placeholder.svg",
      rating: 4.7,
      downloads: 750,
      createdDate: "2023-11-05",
      isPremium: true
    },
    {
      id: "TEMP-004",
      title: "Kitchen Safety Checklist",
      description: "Daily safety and cleanliness verification checklist",
      category: "Checklist",
      thumbnail: "/placeholder.svg",
      rating: 4.6,
      downloads: 1500,
      createdDate: "2023-08-12",
      isPremium: false
    },
    {
      id: "TEMP-005",
      title: "Customer Feedback Form",
      description: "Customer satisfaction survey with rating scales and comments",
      category: "Form",
      thumbnail: "/placeholder.svg",
      rating: 4.3,
      downloads: 980,
      createdDate: "2023-10-28",
      isPremium: false
    },
    {
      id: "TEMP-006",
      title: "Equipment Maintenance Log",
      description: "Detailed log for tracking equipment maintenance and repairs",
      category: "Form",
      thumbnail: "/placeholder.svg",
      rating: 4.4,
      downloads: 650,
      createdDate: "2023-09-15",
      isPremium: false
    },
    {
      id: "TEMP-007",
      title: "Quarterly Performance Dashboard",
      description: "Executive dashboard showing key performance metrics",
      category: "Report",
      thumbnail: "/placeholder.svg",
      rating: 4.9,
      downloads: 420,
      createdDate: "2023-11-10",
      isPremium: true
    },
    {
      id: "TEMP-008",
      title: "Food Safety Audit",
      description: "Comprehensive food safety compliance audit checklist",
      category: "Checklist",
      thumbnail: "/placeholder.svg",
      rating: 4.7,
      downloads: 890,
      createdDate: "2023-10-05",
      isPremium: true
    }
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

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeItem="templates" />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Browse Templates</h1>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search templates..." 
                className="pl-10 bg-white border-gray-200"
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Templates</TabsTrigger>
              <TabsTrigger value="form">Forms</TabsTrigger>
              <TabsTrigger value="report">Reports</TabsTrigger>
              <TabsTrigger value="workflow">Workflows</TabsTrigger>
              <TabsTrigger value="checklist">Checklists</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {templates.map((template) => (
                  <Card key={template.id} className="overflow-hidden border border-gray-200 hover:border-gray-300 transition-all">
                    <div className="aspect-video bg-gray-100 relative">
                      <img 
                        src={template.thumbnail} 
                        alt={template.title}
                        className="w-full h-full object-cover"
                      />
                      {template.isPremium && (
                        <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                          Premium
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          {getCategoryIcon(template.category)}
                          {template.category}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {template.downloads}
                        </span>
                      </div>
                      <h3 className="font-medium text-gray-900 mb-1">{template.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{template.description}</p>
                    </CardContent>
                    <CardFooter className="px-4 py-3 bg-gray-50 flex justify-between items-center">
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{template.rating}</span>
                      </div>
                      <Button size="sm">
                        Use Template
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="form" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {templates
                  .filter(template => template.category === "Form")
                  .map((template) => (
                    <Card key={template.id} className="overflow-hidden border border-gray-200 hover:border-gray-300 transition-all">
                      <div className="aspect-video bg-gray-100 relative">
                        <img 
                          src={template.thumbnail} 
                          alt={template.title}
                          className="w-full h-full object-cover"
                        />
                        {template.isPremium && (
                          <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                            Premium
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <span className="flex items-center gap-1">
                            {getCategoryIcon(template.category)}
                            {template.category}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {template.downloads}
                          </span>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-1">{template.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{template.description}</p>
                      </CardContent>
                      <CardFooter className="px-4 py-3 bg-gray-50 flex justify-between items-center">
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium">{template.rating}</span>
                        </div>
                        <Button size="sm">
                          Use Template
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            {/* Similar TabsContent for other categories */}
            <TabsContent value="report" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {templates
                  .filter(template => template.category === "Report")
                  .map((template) => (
                    <Card key={template.id} className="overflow-hidden border border-gray-200 hover:border-gray-300 transition-all">
                      {/* Same card content as above */}
                      <div className="aspect-video bg-gray-100 relative">
                        <img 
                          src={template.thumbnail} 
                          alt={template.title}
                          className="w-full h-full object-cover"
                        />
                        {template.isPremium && (
                          <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                            Premium
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <span className="flex items-center gap-1">
                            {getCategoryIcon(template.category)}
                            {template.category}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {template.downloads}
                          </span>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-1">{template.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{template.description}</p>
                      </CardContent>
                      <CardFooter className="px-4 py-3 bg-gray-50 flex justify-between items-center">
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium">{template.rating}</span>
                        </div>
                        <Button size="sm">
                          Use Template
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Templates;