
import { useTyping } from "@/context/TypingContext";
import { DifficultyLevel } from "@/types/typing";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const DifficultySelector = () => {
  const { difficulty, changeDifficulty } = useTyping();
  
  const difficultyOptions: { value: DifficultyLevel; label: string }[] = [
    { value: "very_easy", label: "Very Easy" },
    { value: "easy", label: "Easy" },
    { value: "hard", label: "Hard" },
    { value: "very_hard", label: "Very Hard" },
    { value: "expert", label: "Expert" },
  ];
  
  const handleDifficultyChange = (value: string) => {
    changeDifficulty(value as DifficultyLevel);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="card-hover">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span>Difficulty</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            value={difficulty} 
            onValueChange={handleDifficultyChange}
            className="flex flex-wrap gap-4"
          >
            {difficultyOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DifficultySelector;
