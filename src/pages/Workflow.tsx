import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow as WorkflowIcon, ArrowRight, Plus, MoreHorizontal } from "lucide-react";

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  tasks: number;
  status: "Active" | "Pending" | "Completed";
}

interface WorkflowProcess {
  id: string;
  title: string;
  description: string;
  steps: WorkflowStep[];
  createdBy: string;
  createdDate: string;
}

const Workflow = () => {
  // Sample workflow data
  const workflows: WorkflowProcess[] = [
    {
      id: "WF-001",
      title: "New Menu Item Approval",
      description: "Process for approving and implementing new menu items",
      createdBy: "John Doe",
      createdDate: "2023-11-15",
      steps: [
        {
          id: "STEP-001",
          title: "Initial Proposal",
          description: "Chef submits new menu item proposal",
          tasks: 2,
          status: "Completed"
        },
        {
          id: "STEP-002",
          title: "Cost Analysis",
          description: "Finance team reviews costs and pricing",
          tasks: 3,
          status: "Active"
        },
        {
          id: "STEP-003",
          title: "Taste Testing",
          description: "Management team conducts taste test",
          tasks: 1,
          status: "Pending"
        },
        {
          id: "STEP-004",
          title: "Final Approval",
          description: "Executive chef gives final approval",
          tasks: 2,
          status: "Pending"
        }
      ]
    },
    {
      id: "WF-002",
      title: "Monthly Inventory Process",
      description: "End-of-month inventory counting and reconciliation",
      createdBy: "Jane Smith",
      createdDate: "2023-11-20",
      steps: [
        {
          id: "STEP-001",
          title: "Pre-Count Preparation",
          description: "Prepare inventory sheets and assign counters",
          tasks: 3,
          status: "Completed"
        },
        {
          id: "STEP-002",
          title: "Physical Count",
          description: "Staff conducts physical inventory count",
          tasks: 5,
          status: "Active"
        },
        {
          id: "STEP-003",
          title: "Data Entry",
          description: "Enter count data into system",
          tasks: 2,
          status: "Pending"
        },
        {
          id: "STEP-004",
          title: "Reconciliation",
          description: "Reconcile counted inventory with system records",
          tasks: 4,
          status: "Pending"
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-blue-100 text-blue-700";
      case "Pending": return "bg-orange-100 text-orange-700";
      case "Completed": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeItem="workflow" />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Workflows</h1>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              + Create Workflow
            </Button>
          </div>

          <div className="space-y-8">
            {workflows.map((workflow) => (
              <Card key={workflow.id} className="border border-gray-200">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <WorkflowIcon className="w-5 h-5 text-green-600" />
                        <CardTitle className="text-xl">{workflow.title}</CardTitle>
                      </div>
                      <CardDescription>{workflow.description}</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    Created by {workflow.createdBy} on {workflow.createdDate}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {workflow.steps.map((step, index) => (
                      <div key={step.id} className="flex items-start">
                        <div className="w-64 bg-white border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-gray-900">{step.title}</h3>
                            <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(step.status)}`}>
                              {step.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                          <div className="text-sm text-gray-500">
                            {step.tasks} {step.tasks === 1 ? 'task' : 'tasks'}
                          </div>
                        </div>
                        {index < workflow.steps.length - 1 && (
                          <div className="flex items-center mx-2 mt-8">
                            <ArrowRight className="w-5 h-5 text-gray-400" />
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="flex items-center mt-8">
                      <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-dashed border-gray-300">
                        <Plus className="w-5 h-5 text-gray-400" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Workflow;