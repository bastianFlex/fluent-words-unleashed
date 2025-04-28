
import { useTyping } from "@/context/TypingContext";
import { motion } from "framer-motion";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LightbulbIcon } from "lucide-react";

const WordMapping = () => {
  const { currentSentence, language } = useTyping();
  
  if (!currentSentence || !currentSentence.mapping) return null;
  
  // Determine source and target languages
  const [sourceLanguage, targetLanguage] = language.includes('-') 
    ? language.split('-')
    : [language, ''];
    
  // Get the appropriate translation key
  const translationKey = targetLanguage 
    ? `translated_${targetLanguage}` as keyof typeof currentSentence.mapping[0]
    : '';
    
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="card-hover">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <LightbulbIcon className="h-5 w-5 text-primary" />
            <span>Translation with Highlights</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {targetLanguage ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2">{sourceLanguage.toUpperCase()}</TableHead>
                  <TableHead className="w-1/2">{targetLanguage.toUpperCase()}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentSentence.mapping.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <span className="word-highlight-original">
                        {item.original}
                      </span>
                    </TableCell>
                    <TableCell>
                      {translationKey && item[translationKey] && (
                        <span className="word-highlight-translation">
                          {item[translationKey] as string}
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              Select a translation mode to see word mappings
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WordMapping;
