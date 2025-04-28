
export type Language = 'pt' | 'en' | 'fr' | 'es';

export type DifficultyLevel = 'very_easy' | 'easy' | 'hard' | 'very_hard' | 'expert';

export interface WordMapping {
  original: string;
  translated_en?: string;
  translated_fr?: string;
  translated_es?: string;
  translated_pt?: string;
}

export interface Sentence {
  text: string;
  difficulty: DifficultyLevel;
  translation: {
    en?: string;
    fr?: string;
    es?: string;
    pt?: string;
  };
  mapping: WordMapping[];
}

export interface LanguageData {
  [key: string]: Sentence[];
}

export type LanguageMode = 
  | 'pt' 
  | 'en-pt' 
  | 'fr-pt' 
  | 'es-pt';

export interface TypingStats {
  wpm: number;
  accuracy: number;
  correctKeystrokes: number;
  incorrectKeystrokes: number;
  timer: number;
  isActive: boolean;
}

export interface HistoryEntry {
  id: string;
  date: string;
  language: LanguageMode;
  difficulty: DifficultyLevel;
  wpm: number;
  accuracy: number;
  duration: number;
}

export interface AudioOptions {
  speed: 'normal' | 'slow';
}
