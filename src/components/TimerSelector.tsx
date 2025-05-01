
import { useTyping } from "@/context/TypingContext";
import { TimerMode } from "@/types/typing";
import { motion } from "framer-motion";
import { Clock, Infinity } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const TimerSelector = () => {
  const { timerMode, changeTimerMode } = useTyping();
  
  const timerOptions: { value: TimerMode; label: string }[] = [
    { value: "1min", label: "1 Minute" },
    { value: "2min", label: "2 Minutes" },
    { value: "3min", label: "3 Minutes" },
    { value: "4min", label: "4 Minutes" },
    { value: "5min", label: "5 Minutes" },
    { value: "infinite", label: "Infinite Training" },
  ];
  
  const handleTimerModeChange = (value: string) => {
    changeTimerMode(value as TimerMode);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="card-hover">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            {timerMode === 'infinite' ? (
              <Infinity className="h-5 w-5 text-primary" />
            ) : (
              <Clock className="h-5 w-5 text-primary" />
            )}
            <span>Timer Mode</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            value={timerMode} 
            onValueChange={handleTimerModeChange}
            className="flex flex-wrap gap-4"
          >
            {timerOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>
                  {option.value === 'infinite' && <Infinity className="h-4 w-4 inline mr-1" />}
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TimerSelector;
