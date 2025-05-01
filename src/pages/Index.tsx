
import { TypingProvider } from "@/context/TypingContext";
import TypingLayout from "@/components/TypingLayout";
import LanguageSelector from "@/components/LanguageSelector";
import DifficultySelector from "@/components/DifficultySelector";
import TimerSelector from "@/components/TimerSelector";
import AudioTranslator from "@/components/AudioTranslator";
import WordMapping from "@/components/WordMapping";
import TypingArea from "@/components/TypingArea";
import StatusPanel from "@/components/StatusPanel";
import History from "@/components/History";
import { motion } from "framer-motion";

const Index = () => {
  // Typing section content
  const typingContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <LanguageSelector />
      <DifficultySelector />
      <TimerSelector />
      <AudioTranslator />
      <WordMapping />
      
      <motion.div 
        className="md:col-span-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <TypingArea />
      </motion.div>
      
      <motion.div 
        className="md:col-span-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <StatusPanel />
      </motion.div>
    </div>
  );
  
  // History section content
  const historyContent = <History />;
  
  return (
    <TypingProvider>
      <TypingLayout 
        typingContent={typingContent} 
        historyContent={historyContent} 
      />
    </TypingProvider>
  );
};

export default Index;
