
import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KeyboardIcon, HistoryIcon } from "lucide-react";
import { motion } from "framer-motion";

interface TypingLayoutProps {
  typingContent: ReactNode;
  historyContent: ReactNode;
}

const TypingLayout = ({ typingContent, historyContent }: TypingLayoutProps) => {
  return (
    <div className="container px-4 py-6 max-w-6xl mx-auto">
      <motion.div 
        className="mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold bg-gradient-blue-purple bg-clip-text text-transparent">
          Multilingual Typing Trainer
        </h1>
        <p className="text-muted-foreground mt-2">
          Improve your typing skills while learning new languages
        </p>
      </motion.div>
      
      <Tabs defaultValue="typing" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
          <TabsTrigger value="typing" className="flex items-center gap-2">
            <KeyboardIcon className="h-4 w-4" />
            <span>Typing</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <HistoryIcon className="h-4 w-4" />
            <span>History</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="typing">
          {typingContent}
        </TabsContent>
        <TabsContent value="history">
          {historyContent}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TypingLayout;
