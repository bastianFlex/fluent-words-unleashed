
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  LanguageMode, 
  DifficultyLevel, 
  Sentence, 
  TypingStats,
  HistoryEntry,
  AudioOptions
} from '@/types/typing';
import { getSentences } from '@/data/sentences';
import { useToast } from "@/components/ui/use-toast";

interface TypingContextProps {
  language: LanguageMode;
  difficulty: DifficultyLevel;
  currentSentence: Sentence | null;
  typedText: string;
  stats: TypingStats;
  history: HistoryEntry[];
  audioOptions: AudioOptions;
  changeLanguage: (lang: LanguageMode) => void;
  changeDifficulty: (diff: DifficultyLevel) => void;
  updateTypedText: (text: string) => void;
  resetTyping: () => void;
  nextSentence: () => void;
  toggleTimer: () => void;
  resetTimer: () => void;
  playAudio: (text: string, targetLanguage: string) => void;
  changeAudioSpeed: (speed: 'normal' | 'slow') => void;
}

const TypingContext = createContext<TypingContextProps | undefined>(undefined);

export const useTyping = () => {
  const context = useContext(TypingContext);
  if (!context) {
    throw new Error('useTyping must be used within a TypingProvider');
  }
  return context;
};

export const TypingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageMode>('pt');
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('easy');
  const [currentSentence, setCurrentSentence] = useState<Sentence | null>(null);
  const [availableSentences, setAvailableSentences] = useState<Sentence[]>([]);
  const [typedText, setTypedText] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [audioOptions, setAudioOptions] = useState<AudioOptions>({
    speed: 'normal'
  });
  const { toast } = useToast();
  
  // Stats
  const [stats, setStats] = useState<TypingStats>({
    wpm: 0,
    accuracy: 0,
    correctKeystrokes: 0,
    incorrectKeystrokes: 0,
    timer: 0,
    isActive: false
  });
  
  // Timer interval
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
  
  // Initialize sentences based on language and difficulty
  useEffect(() => {
    const sentences = getSentences(language, difficulty);
    setAvailableSentences(sentences);
    
    // Pick a random sentence if there are any available
    if (sentences.length > 0) {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      setCurrentSentence(sentences[randomIndex]);
    } else {
      setCurrentSentence(null);
      toast({
        title: "No sentences available",
        description: "No sentences found for the selected language and difficulty",
        variant: "destructive",
      });
    }
    
    // Reset typing session
    setTypedText('');
    resetTimerState();
  }, [language, difficulty]);
  
  // Update stats when typing
  useEffect(() => {
    if (!currentSentence || !stats.isActive) return;
    
    const targetText = currentSentence.text;
    let correct = 0;
    let incorrect = 0;
    
    // Count correct and incorrect keystrokes
    for (let i = 0; i < typedText.length; i++) {
      if (i >= targetText.length || typedText[i] !== targetText[i]) {
        incorrect++;
      } else {
        correct++;
      }
    }
    
    // Calculate accuracy
    const totalKeystrokes = correct + incorrect;
    const accuracy = totalKeystrokes > 0 
      ? Math.round((correct / totalKeystrokes) * 100) 
      : 100;
    
    // Calculate WPM (Word Per Minute)
    // Assuming average word is 5 characters
    const minutes = stats.timer / 60;
    const words = correct / 5;
    const wpm = minutes > 0 ? Math.round(words / minutes) : 0;
    
    setStats(prev => ({
      ...prev,
      wpm,
      accuracy,
      correctKeystrokes: correct,
      incorrectKeystrokes: incorrect
    }));
    
    // Check if the sentence is completed correctly
    if (typedText === targetText) {
      completeTyping();
    }
  }, [typedText, currentSentence, stats.timer, stats.isActive]);
  
  // Timer logic
  useEffect(() => {
    if (stats.isActive && !timerInterval) {
      const interval = setInterval(() => {
        setStats(prev => ({
          ...prev,
          timer: prev.timer + 1
        }));
      }, 1000);
      setTimerInterval(interval);
    } else if (!stats.isActive && timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
    
    return () => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    };
  }, [stats.isActive]);
  
  // Complete typing and save to history
  const completeTyping = useCallback(() => {
    if (!currentSentence) return;
    
    // Stop the timer
    setStats(prev => ({
      ...prev,
      isActive: false
    }));
    
    // Add to history
    const newEntry: HistoryEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      language,
      difficulty,
      wpm: stats.wpm,
      accuracy: stats.accuracy,
      duration: stats.timer
    };
    
    setHistory(prev => [newEntry, ...prev]);
    
    // Show completion message
    toast({
      title: "Sentence completed!",
      description: `WPM: ${stats.wpm} | Accuracy: ${stats.accuracy}%`,
    });
    
    // Go to next sentence after a short delay
    setTimeout(() => {
      nextSentence();
    }, 1500);
  }, [currentSentence, language, difficulty, stats]);
  
  // Next sentence
  const nextSentence = useCallback(() => {
    if (availableSentences.length === 0) return;
    
    // Pick a different sentence
    let randomIndex;
    let newSentence;
    
    do {
      randomIndex = Math.floor(Math.random() * availableSentences.length);
      newSentence = availableSentences[randomIndex];
    } while (
      availableSentences.length > 1 && 
      newSentence.text === currentSentence?.text
    );
    
    setCurrentSentence(newSentence);
    setTypedText('');
    resetTimerState();
  }, [availableSentences, currentSentence]);
  
  // Reset timer state
  const resetTimerState = () => {
    setStats({
      wpm: 0,
      accuracy: 0,
      correctKeystrokes: 0,
      incorrectKeystrokes: 0,
      timer: 0,
      isActive: false
    });
    
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  };
  
  // Play audio (text-to-speech)
  const playAudio = useCallback((text: string, targetLanguage: string) => {
    // In a real implementation, we would connect to a TTS API
    // For now, we'll use the browser's built-in speech synthesis
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set language based on the target
    switch(targetLanguage) {
      case 'pt':
        utterance.lang = 'pt-BR';
        break;
      case 'en':
        utterance.lang = 'en-US';
        break;
      case 'fr':
        utterance.lang = 'fr-FR';
        break;
      case 'es':
        utterance.lang = 'es-ES';
        break;
      default:
        utterance.lang = 'en-US';
    }
    
    // Set speech rate based on options
    if (audioOptions.speed === 'slow') {
      utterance.rate = 0.7;
    } else {
      utterance.rate = 1.0;
    }
    
    window.speechSynthesis.speak(utterance);
    
    toast({
      title: "Playing audio",
      description: audioOptions.speed === 'slow' ? "Playing at slow speed" : "Playing at normal speed",
    });
  }, [audioOptions.speed]);
  
  // Change audio speed
  const changeAudioSpeed = useCallback((speed: 'normal' | 'slow') => {
    setAudioOptions(prev => ({
      ...prev,
      speed
    }));
    
    toast({
      title: "Audio speed changed",
      description: `Speed set to ${speed}`,
    });
  }, []);
  
  // Change language
  const changeLanguage = useCallback((lang: LanguageMode) => {
    setLanguage(lang);
    
    toast({
      title: "Language changed",
      description: `Selected: ${lang}`,
    });
  }, []);
  
  // Change difficulty
  const changeDifficulty = useCallback((diff: DifficultyLevel) => {
    setDifficulty(diff);
    
    toast({
      title: "Difficulty changed",
      description: `Level: ${diff.replace('_', ' ')}`,
    });
  }, []);
  
  // Update typed text
  const updateTypedText = useCallback((text: string) => {
    setTypedText(text);
    
    // Start timer if it's the first keystroke
    if (text.length === 1 && !stats.isActive) {
      setStats(prev => ({
        ...prev,
        isActive: true
      }));
    }
  }, [stats.isActive]);
  
  // Toggle timer
  const toggleTimer = useCallback(() => {
    setStats(prev => ({
      ...prev,
      isActive: !prev.isActive
    }));
    
    toast({
      title: stats.isActive ? "Paused" : "Resumed",
      description: stats.isActive ? "Timer paused" : "Timer resumed",
    });
  }, [stats.isActive]);
  
  // Reset typing
  const resetTyping = useCallback(() => {
    setTypedText('');
    resetTimerState();
    
    toast({
      title: "Reset",
      description: "Typing session reset",
    });
  }, []);
  
  return (
    <TypingContext.Provider
      value={{
        language,
        difficulty,
        currentSentence,
        typedText,
        stats,
        history,
        audioOptions,
        changeLanguage,
        changeDifficulty,
        updateTypedText,
        resetTyping,
        nextSentence,
        toggleTimer,
        resetTimer: resetTimerState,
        playAudio,
        changeAudioSpeed,
      }}
    >
      {children}
    </TypingContext.Provider>
  );
};
