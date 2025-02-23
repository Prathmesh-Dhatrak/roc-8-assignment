import { cn } from "@/lib/utils";

type StatisticCardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
  variant?: 'default' | 'danger';
};

export const StatisticCard = ({ title, value, icon, variant = 'default' }: StatisticCardProps) => {
  return (
    <div className={cn(
      'p-6 rounded-xl bg-white shadow-sm', // Updated padding and added shadow
      variant === 'danger' ? 'bg-red-50' : 'bg-white'
    )}>
      <div className="flex items-center gap-4">
        <div className={cn(
          'p-3 rounded-xl', // Increased padding
          variant === 'danger' ? 'bg-red-100' : 'bg-gray-50'
        )}>
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};