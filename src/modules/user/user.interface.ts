export interface User {
  name: string;
  email: string;
  id: string;
  dictationsHistory: DictationEvent[];
  dictationsDifficulties: number[];
  selectedLanguage: string;
}

export interface DictationEvent {
  id: string;
  dictationName: string;
  score: string;
  date: number;
}
