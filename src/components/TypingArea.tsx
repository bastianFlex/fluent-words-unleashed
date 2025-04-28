
import { useTyping } from "@/context/TypingContext";
import { motion } from "framer-motion";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { KeyboardIcon } from "lucide-react";

const TypingArea = () => {
  const { currentSentence, typedText, updateTypedText, stats } = useTyping();
  
  if (!currentSentence) return null;
  
  const handleTypedTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Only allow typing if timer is active
    if (stats.isActive) {
      updateTypedText(event.target.value);
    }
  };
  
  // Render the sentence with character highlighting
  const renderTargetSentence = () => {
    const chars = currentSentence.text.split('');
    
    return (
      <div className="font-mono text-lg mb-4 bg-muted/20 p-3 rounded-md leading-relaxed">
        {chars.map((char, index) => {
          let className = '';
          
          if (index < typedText.length) {
            className = typedText[index] === char ? 'correct-char' : 'incorrect-char';
          } else if (index === typedText.length) {
            className = 'current-char';
          }
          
          return (
            <span key={index} className={className}>
              {char}
            </span>
          );
        })}
      </div>
    );
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="card-hover">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <KeyboardIcon className="h-5 w-5 text-primary" />
            <span>Typing Area</span>
          </CardTitle>
          <CardDescription>
            Type the text exactly as shown
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {renderTargetSentence()}
          
          <Textarea
            value={typedText}
            onChange={handleTypedTextChange}
            placeholder={stats.isActive ? "Start typing..." : "Press control buttons to start"}
            className="min-h-[100px] font-mono"
            disabled={!stats.isActive}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TypingArea;
