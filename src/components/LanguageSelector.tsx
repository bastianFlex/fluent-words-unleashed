
import { useState } from "react";
import { useTyping } from "@/context/TypingContext";
import { LanguageMode } from "@/types/typing";
import { Flag } from "lucide-react";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSelector = () => {
  const { language, changeLanguage } = useTyping();
  
  const languageOptions: { value: LanguageMode; label: string }[] = [
    { value: "pt", label: "Portuguese" },
    { value: "en-pt", label: "English → Portuguese" },
    { value: "fr-pt", label: "French → Portuguese" },
    { value: "es-pt", label: "Spanish → Portuguese" }
  ];
  
  const handleLanguageChange = (value: string) => {
    changeLanguage(value as LanguageMode);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <Card className="card-hover">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Flag className="h-5 w-5 text-primary" />
            <span>Language</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              {languageOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LanguageSelector;
