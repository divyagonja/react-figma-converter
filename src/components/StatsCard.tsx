
interface StatsCardProps {
  title: string;
  total: number;
  breakdown: Array<{
    label: string;
    value: number;
    color: string;
  }>;
  icon: React.ReactNode;
}

const StatsCard = ({ title, total, breakdown, icon }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-gray-400">
            {icon}
          </div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
        <span className="text-2xl font-bold text-gray-900">{total}</span>
      </div>
      
      <div className="flex gap-6">
        {breakdown.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-sm text-gray-500">{item.label}</span>
            <span className={`text-lg font-semibold ${item.color}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;
