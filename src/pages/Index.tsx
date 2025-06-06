
import { CheckSquare, AlertCircle, Workflow } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import DataTable from "@/components/DataTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeItem="home" />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          {/* Greeting */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Good Evening ! Ajay</h1>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="22 Tasks"
              total={22}
              breakdown={[
                { label: "Ongoing", value: 10, color: "text-orange-600" },
                { label: "Overdue", value: 2, color: "text-red-600" },
                { label: "Completed", value: 10, color: "text-green-600" }
              ]}
              icon={<CheckSquare className="w-5 h-5" />}
            />
            
            <StatsCard
              title="22 Issues"
              total={22}
              breakdown={[
                { label: "Open", value: 10, color: "text-orange-600" },
                { label: "Ignored", value: 2, color: "text-red-600" },
                { label: "Resolved", value: 10, color: "text-green-600" }
              ]}
              icon={<AlertCircle className="w-5 h-5" />}
            />
            
            <StatsCard
              title="20 Workflows"
              total={20}
              breakdown={[
                { label: "Ongoing Tasks", value: 10, color: "text-orange-600" },
                { label: "Scheduled Tasks", value: 0, color: "text-blue-600" },
                { label: "Responses", value: 10, color: "text-green-600" }
              ]}
              icon={<Workflow className="w-5 h-5" />}
            />
          </div>

          {/* Data Table */}
          <DataTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
