
import { useTyping } from "@/context/TypingContext";
import { motion } from "framer-motion";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Timer, PauseCircle, StopCircle, RefreshCw } from "lucide-react";
import { formatTime } from "@/lib/utils";

const StatusPanel = () => {
  const { stats, toggleTimer, resetTyping, currentSentence, typedText } = useTyping();
  
  if (!currentSentence) return null;
  
  const progressPercentage = currentSentence.text.length > 0
    ? Math.min(Math.round((typedText.length / currentSentence.text.length) * 100), 100)
    : 0;
    
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Card className="card-hover">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Timer className="h-5 w-5 text-primary" />
            <span>Status</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="bg-muted/20 rounded-md p-3 text-center">
              <div className="text-sm text-muted-foreground">Time</div>
              <div className="text-xl font-mono">{formatTime(stats.timer)}</div>
            </div>
            <div className="bg-muted/20 rounded-md p-3 text-center">
              <div className="text-sm text-muted-foreground">WPM</div>
              <div className="text-xl font-mono">{stats.wpm}</div>
            </div>
            <div className="bg-muted/20 rounded-md p-3 text-center">
              <div className="text-sm text-muted-foreground">Accuracy</div>
              <div className="text-xl font-mono">{stats.accuracy}%</div>
            </div>
            <div className="bg-muted/20 rounded-md p-3 text-center">
              <div className="text-sm text-muted-foreground">Keystrokes</div>
              <div className="text-xl font-mono text-green-500">{stats.correctKeystrokes}<span className="text-red-500 ml-2">-{stats.incorrectKeystrokes}</span></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} />
          </div>
          
          <div className="flex justify-center gap-2">
            <Button 
              onClick={toggleTimer}
              variant="outline"
              size="icon"
              aria-label={stats.isActive ? "Pause" : "Resume"}
            >
              <PauseCircle className="h-5 w-5" />
            </Button>
            <Button
              onClick={resetTyping}
              variant="outline"
              size="icon"
              aria-label="Stop"
            >
              <StopCircle className="h-5 w-5" />
            </Button>
            <Button
              onClick={resetTyping}
              variant="outline"
              size="icon"
              aria-label="Restart"
            >
              <RefreshCw className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StatusPanel;
