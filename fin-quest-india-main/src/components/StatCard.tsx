import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

const StatCard = ({ icon: Icon, label, value, trend, trendUp, className = "" }: StatCardProps) => {
  return (
    <div className={`glass-card p-6 rounded-xl hover-lift ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-muted-foreground text-sm mb-1">{label}</p>
          <p className="text-3xl font-heading font-bold gradient-text">{value}</p>
          {trend && (
            <p className={`text-sm mt-2 ${trendUp ? "text-success" : "text-destructive"}`}>
              {trendUp ? "↑" : "↓"} {trend}
            </p>
          )}
        </div>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
