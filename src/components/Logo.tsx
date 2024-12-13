import { PieChart } from 'lucide-react';
import { GradientText } from './ui/GradientText';

export function Logo() {
  return (
    <div className="flex items-center space-x-2 opacity-75 hover:opacity-100 transition-opacity">
      <PieChart className="w-6 h-6 text-purple-400" />
      <span className="text-xl font-bold">
        <GradientText gradient="secondary">Piehigh.co</GradientText>
      </span>
    </div>
  );
}