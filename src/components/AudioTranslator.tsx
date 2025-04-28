
import { useTyping } from "@/context/TypingContext";
import { motion } from "framer-motion";
import { Speaker, PauseCircle } from "lucide-react";
import { 
  Card, 
  CardContent,
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { AudioOptions } from "@/types/typing";

const AudioTranslator = () => {
  const { currentSentence, language, playAudio, audioOptions, changeAudioSpeed } = useTyping();
  
  if (!currentSentence) return null;
  
  // Determine source and target languages
  const [sourceLanguage, targetLanguage] = language.includes('-') 
    ? language.split('-')
    : [language, ''];
    
  // Get the translation if needed
  const translationKey = targetLanguage as keyof typeof currentSentence.translation;
  const translatedText = targetLanguage ? currentSentence.translation[translationKey] : '';
  
  const handleAudioPlay = (text: string, lang: string) => {
    playAudio(text, lang);
  };
  
  const handleSpeedToggle = (speed: 'normal' | 'slow') => {
    changeAudioSpeed(speed);
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
            <Speaker className="h-5 w-5 text-primary" />
            <span>Audio</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 justify-end">
            <div className="text-sm text-muted-foreground">Speed:</div>
            <Toggle
              pressed={audioOptions.speed === 'normal'}
              onPressedChange={() => handleSpeedToggle('normal')}
              size="sm"
              variant="outline"
              aria-label="Toggle normal speed"
            >
              Normal
            </Toggle>
            <Toggle
              pressed={audioOptions.speed === 'slow'}
              onPressedChange={() => handleSpeedToggle('slow')}
              size="sm"
              variant="outline"
              aria-label="Toggle slow speed"
            >
              Slow
            </Toggle>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 rounded-md bg-muted/30">
              <div className="flex justify-between items-center">
                <div className="font-medium">{sourceLanguage.toUpperCase()}</div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  aria-label="Play original audio"
                  onClick={() => handleAudioPlay(currentSentence.text, sourceLanguage)}
                >
                  <Speaker className="h-5 w-5" />
                </Button>
              </div>
              <p className="mt-2 text-sm">{currentSentence.text}</p>
            </div>
            
            {targetLanguage && translatedText && (
              <div className="p-3 rounded-md bg-muted/30">
                <div className="flex justify-between items-center">
                  <div className="font-medium">{targetLanguage.toUpperCase()}</div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    aria-label="Play translation audio"
                    onClick={() => handleAudioPlay(translatedText, targetLanguage)}
                  >
                    <Speaker className="h-5 w-5" />
                  </Button>
                </div>
                <p className="mt-2 text-sm">{translatedText}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AudioTranslator;
